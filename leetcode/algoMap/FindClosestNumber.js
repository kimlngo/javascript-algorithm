'use strict';

function findClosestNumber(nums) {
  const absMin = Math.min(...nums.map(n => Math.abs(n)));

  const minNumbers = nums.filter(n => Math.abs(n) === absMin);

  if (minNumbers.length === 1) return minNumbers[0];
  else return Math.max(...minNumbers);
}

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
