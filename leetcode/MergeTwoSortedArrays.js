'use strict';

function merge(nums1, m, nums2, n) {
  if (n === 0) return;
  if (m === 0) {
    for (let i = 0; i < n; i++) nums1[i] = nums2[i];
    return;
  }

  let i = 0;
  let j = 0;
  let insertCount = 0;

  while (i < m + insertCount && j < n) {
    if (nums1[i] < nums2[j]) i++;
    else {
      shiftRight(nums1, m + insertCount, i);
      nums1[i] = nums2[j];
      i++;
      j++;
      insertCount++;
    }
  }

  if (j < n) {
    //copy over the remaining of nums2
    for (let k = j; k < n; k++) {
      nums1[m + insertCount + k - j] = nums2[k];
    }
  }
}

function shiftRight(nums, m, stopIdx) {
  for (let i = m - 1; i >= stopIdx; i--) nums[i + 1] = nums[i];
}
let nums1 = [1, 3, 5, 0, 0, 0];
let nums2 = [2, 4, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1);
