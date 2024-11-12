'use strict';

function linearSearch(numsArr, target) {
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] === target) return i;
  }
  return -1;
}

const arr = [1, 5, 3, 7, 2, 8, 10];
console.log(linearSearch(arr, 3));
console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 11));

console.log('#### Binary Search ####');
console.log('## search found ##');
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 1));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 2));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 3));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 5));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 7));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 9));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 11));

console.log('## search NOT-found ##');
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], -10));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 4));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 0));
console.log(binarySearch([1, 2, 3, 5, 7, 9, 11], 20));

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (arr[mid] === num) return mid;
    else if (arr[mid] < num) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log('#### Search String ####');

console.log('wowomgzomg', 'omg', naiveSearchString('wowomgzomg', 'omg'));
console.log(
  'harold said haha in hamburg',
  'haha',
  naiveSearchString('harold said haha in hamburg', 'haha')
);
console.log(
  'the complete javascript course 2024',
  'java',
  naiveSearchString('the complete javascript course 2024', 'java')
);

console.log('abcoooodef', 'ooo', naiveSearchString('abcoooodef', 'ooo'));
console.log('abcoooodef', 'oo', naiveSearchString('abcoooodef', 'oo'));
console.log('abcoooodef', 'uio', naiveSearchString('abcoooodef', 'uio'));

function naiveSearchString(str, patt) {
  let count = 0;

  for (let i = 0; i <= str.length - patt.length; i++) {
    if (str[i] !== patt[0]) continue;

    for (let j = 1; j < patt.length; j++) {
      if (str[i + j] !== patt[j]) break;

      //looped through and all match -> count++
      if (j === patt.length - 1) count++;
    }
  }
  return count;
}
