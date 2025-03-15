'use strict';

function twoSumII(numbers, target) {
  let left = 0,
    right = numbers.length - 1,
    sum = 0;

  while (left < right) {
    sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }

  return [-1, -1];
}

console.log(twoSumII([2, 7, 11, 15], 9));
console.log(twoSumII([2, 3, 4], 6));
console.log(twoSumII([-1, 0], -1));
