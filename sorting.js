'use strict';

// console.log(bubbleSort([5, 3, 4, 2, 1]));
// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -31]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

function bubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
