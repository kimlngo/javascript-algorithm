'use strict';

console.log('#### BUBBLE SORT ####');
console.log(bubbleSort([5, 3, 4, 2, 1]));
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -31]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
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

console.log('#### SELECTION SORT ####');
console.log(selectionSort([5, 3, 4, 2, 1]));
console.log(selectionSort([-1, 0, 5, 3, 4, 2, 1]));
console.log(selectionSort([37, 45, 29, 8, 12, 88, -31]));
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = -1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== -1) swap(arr, i, minIndex);
  }

  return arr;
}
