'use strict';

function findPivotIndex(nums) {
  let leftSum = 0;
  let totalSum = nums.reduce((acc, cur) => acc + cur);

  let rightSum;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) leftSum += nums[i - 1];
    rightSum = totalSum - leftSum - nums[i];

    if (leftSum === rightSum) return i;
  }
  return -1;
}

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
