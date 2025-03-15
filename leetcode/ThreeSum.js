'use strict';

function threeSum(nums) {
  let sorted = nums.sort((a, b) => a - b);

  const result = new Set();

  let i = 0,
    j,
    k,
    sum;

  while (i < sorted.length && sorted[i] < 1) {
    j = i + 1;
    k = sorted.length - 1;

    while (j < k) {
      sum = sorted[i] + sorted[j] + sorted[k];

      if (sum === 0) {
        result.add([sorted[i], sorted[j], sorted[k]]);
        while (j < sorted.length - 2 && sorted[j] == sorted[j + 1]) j++;
        j++;

        while (k >= 1 && sorted[k] == sorted[k - 1]) k--;
        k--;
      } else if (sum > 0) {
        while (k >= 1 && sorted[k] == sorted[k - 1]) k--;
        k--;
      } else {
        while (j < sorted.length - 2 && sorted[j] == sorted[j + 1]) j++;
        j++;
      }
    }

    while (i < sorted.length - 2 && sorted[i] == sorted[i + 1]) i++;
    i++;
  }

  return [...result];
}

console.log(threeSum([0, 1, 1]));
