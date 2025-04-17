'use strict';

function twoSum(nums, target) {
  const numSet = new Set();
  for (const n of nums) {
    numSet.add(n);
  }

  let complement;
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (numSet.has(complement)) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] == complement && i !== j) return [i, j];
      }
    }
  }

  return [-1, -1];
}

function naiveSolution(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
