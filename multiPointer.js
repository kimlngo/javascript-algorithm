'use strict';

const arr = [-4, -3, -2, -1, 0, 1, 2, 5];
console.log(sumZero(arr));

function sumZero(arr) {
  if (arr[0] >= 0) return undefined;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const left = arr[i];
    const right = arr[j];

    if (left + right > 0) j -= 1;
    else if (left + right < 0) i += 1;
    else return [left, right];
  }

  return undefined;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 1, 1, 1, 1]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return 1;

  let count = 1;
  let pre = 0,
    cur = 1;

  while (cur < arr.length) {
    if (arr[pre] < arr[cur]) {
      count++;
    }
    pre = cur;
    cur++;
  }

  return count;
}
