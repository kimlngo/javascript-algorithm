'use strict';

function isPowerOfTwo(n) {
  let i = 0;

  while (Math.pow(2, i) <= n) {
    if (Math.pow(2, i) === n) return true;
    i++;
  }

  return false;
}

console.log(isPowerOfTwo(3)); //false
console.log(isPowerOfTwo(8)); //false

function findDisappearedNumbers(nums) {
  const map = new Map();
  const length = nums.length;

  for (let i = 1; i <= length; i++) {
    map.set(i, false);
  }

  for (let i of nums) {
    map.set(i, true);
  }

  const result = [];
  for (let [key, val] of map) {
    if (!val) result.push(key);
  }
  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
