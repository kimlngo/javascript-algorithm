'use strict';

function squareOfSortedArray(nums) {
  if (nums.length === 1) return [nums[0] ** 2];

  const squares = nums.map(n => n ** 2);
  const result = [];

  let left = 0,
    right = squares.length - 1;

  while (left < right) {
    const leftNum = squares[left];
    const rightNum = squares[right];

    if (rightNum > leftNum) {
      result.push(rightNum);
      right--;
    } else if (leftNum > rightNum) {
      result.push(leftNum);
      left++;
    } else {
      //equal case
      result.push(leftNum);
      result.push(rightNum);
      right--;
      left++;
    }
  }

  if (result.length < squares.length) result.push(squares[left]);

  return result.reverse();
}

console.log(squareOfSortedArray([-10000, -9999, -7, -5, 0, 0, 10000]));
