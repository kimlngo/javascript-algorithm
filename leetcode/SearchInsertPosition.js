'use strict';

function searchInsert(nums, target) {
  const length = nums.length;

  if (target > nums[length - 1]) return length;
  else if (target === nums[length - 1]) return length - 1;
  else if (target < nums[0]) return 0;

  //target is in the middle of the nums
  let start = 0,
    end = length - 1;
  let mid;
  while (start < end - 1) {
    mid = Math.trunc((start + end) / 2);

    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[start] > target) return start;
  else return start + 1;
}

console.log(searchInsert([1, 3, 5, 6], 5));
