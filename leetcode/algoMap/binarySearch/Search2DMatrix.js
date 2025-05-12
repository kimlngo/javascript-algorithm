'use strict';

function searchMatrix(matrix, target) {
  for (let arr of matrix) {
    if (arr[0] <= target && target <= arr[arr.length - 1])
      return binarySearch(arr, target);
  }

  return false;
}

function binarySearch(arr, target) {
  if (target < arr[0] || arr[arr.length - 1] < target) return false;

  let left = 0,
    right = arr.length - 1,
    mid,
    midVal;

  while (left <= right) {
    mid = Math.trunc((left + right) / 2);
    midVal = arr[mid];

    if (midVal === target) return true;
    else if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}

const matrix = [[-10], [-7], [-5]];
console.log(searchMatrix(matrix, -10));
