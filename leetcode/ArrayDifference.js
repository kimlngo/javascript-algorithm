'use strict';

function findArrayDifference(nums1, nums2) {
  let num1Set = new Set(nums1);
  let num2Set = new Set(nums2);

  const left = [...num1Set].filter(num => !nums2.includes(num));
  const right = [...num2Set].filter(num => !nums1.includes(num));

  return [left, right];
}

console.log(findArrayDifference([1, 2, 3], [2, 4, 6]));
console.log(findArrayDifference([1, 2, 3, 3], [1, 1, 2, 2]));
