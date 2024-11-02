'use strict';

const arr1 = [1, 2, 3];
const arr2 = [4, 4, 1];

console.log(`is ${arr1} same as ${arr2} ? ${same(arr1, arr2)}`);

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const map1 = arrToMap(arr1);
  const map2 = arrToMap(arr2);

  for (const [k1, v1] of map1.entries()) {
    const k2 = k1 ** 2;
    const v2 = map2.get(k2);

    if (!v2 || v1 !== v2) return false;
  }
  return true;
}

function arrToMap(arr) {
  const result = new Map();

  arr.forEach(el => {
    if (result.get(el)) result.set(el, result.get(el) + 1);
    else result.set(el, 1);
  });

  return result;
}

console.log('#### sameFrequency ####');
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); //false

function sameFrequency(first, second) {
  const firstMap = numberToFrequencyMap(first);
  const secondMap = numberToFrequencyMap(second);

  for (const k of firstMap.keys()) {
    const v1 = firstMap.get(k);
    const v2 = secondMap.get(k);

    if (!v2 || v1 !== v2) return false;
  }

  return true;
}

function numberToFrequencyMap(num) {
  const map = new Map();
  let temp = num;

  while (temp !== 0) {
    const unit = temp % 10;

    if (!map.get(unit)) map.set(unit, 1);
    else map.set(unit, map.get(unit) + 1);

    temp = Math.trunc(temp / 10);
  }

  return map;
}

console.log('#### areThereDuplicates ####');
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function areThereDuplicates(...inputs) {
  let left = 0,
    right = inputs.length - 1;

  while (left < right) {
    // console.log(left, inputs[left], right, inputs[right]);
    if (inputs[left] === inputs[right]) return true;

    left++;
  }

  return false;
}

console.log('#### averagePair ####');
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
function averagePair(input, targetAvg) {
  if (input.length === 0) return false;

  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    const avg = (input[left] + input[right]) / 2;

    if (avg === targetAvg) return true;
    else if (avg < targetAvg) left++;
    else right--;
  }

  return false;
}

console.log('#### isSubSequence ####');
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
function isSubsequence(s1, s2) {
  // good luck. Add any arguments you deem necessary.
  if (s1.length === 0 || s2.length === 0) return false;

  let i = 0,
    j = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i === s1.length) return true;
  else if (j === s2.length) return false;
}
