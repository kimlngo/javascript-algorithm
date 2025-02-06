'use strict';

function maxAverageSlidingWindow(nums, k) {
  let sum = nums.slice(0, k).reduce((acc, cur) => acc + cur);
  let maxAve = sum / k;
  let ave;

  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    ave = sum / k;
    if (ave > maxAve) maxAve = ave;
  }
  return maxAve;
}

console.log(maxAverageSlidingWindow([1, 12, -5, -6, 50, 3], 4));
console.log(maxAverageSlidingWindow([5], 1));
