'use strict';

function summaryRanges(nums) {
  const result = [];
  if (!nums.length) return result;

  let inner = [nums[0]];
  let pre = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - pre !== 1) {
      addResult(result, inner);
      inner = [];
    }

    inner.push(nums[i]);
    pre = nums[i];
  }

  addResult(result, inner);
  return result;
}

function addResult(result, inner) {
  if (inner.length == 1) result.push(`${inner[0]}`);
  else result.push(`${inner[0]}->${inner[inner.length - 1]}`);
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0]));
console.log(summaryRanges([]));
