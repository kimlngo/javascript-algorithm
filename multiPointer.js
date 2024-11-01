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
