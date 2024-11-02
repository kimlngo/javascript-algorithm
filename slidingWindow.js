'use strict';

maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

function maxSum(arr, num) {
  if (arr.length === 0 || arr.length < num) return null;

  let maxSum = -Infinity;

  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;
  console.log('initial', tempSum, maxSum);
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    if (tempSum > maxSum) maxSum = tempSum;

    // maxSum = Math.max(tempSum, maxSum);
    console.log(tempSum, maxSum);
  }
  return maxSum;
}
