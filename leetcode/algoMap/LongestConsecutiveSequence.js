'use strict';

function longestConsecutiveSequence(nums) {
  if (nums.length == 0) return 0;

  //1) sort the array and remove duplicates
  const sortedNums = [...new Set(nums.sort((a, b) => a - b))];

  //2) cut the array into sub-array chunks (consecutive numbers)
  const consecutiveChunks = [];
  let singleChunk = [];

  for (let i = 0; i < sortedNums.length - 1; i++) {
    singleChunk.push(sortedNums[i]);

    if (sortedNums[i + 1] - sortedNums[i] !== 1) {
      consecutiveChunks.push(singleChunk);
      singleChunk = [];
    }
  }

  //handle the last number
  singleChunk.push(sortedNums[sortedNums.length - 1]);
  consecutiveChunks.push(singleChunk);

  //3) find out the longest consecutive sequence
  return Math.max(...consecutiveChunks.map(arr => arr.length));
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutiveSequence([1, 0, 1, 2]));
