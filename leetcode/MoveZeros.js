'use strict';

function moveZeros(nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length - zeroCount; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
      nums.push(0);
      i--;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0, 0, 1]));
