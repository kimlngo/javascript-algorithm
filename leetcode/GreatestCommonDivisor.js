'use strict';

function findGreatestCommonDivisorString(str1, str2) {
  let i = 0,
    j = 0;
  const len1 = str1.length;
  const len2 = str2.length;
  const commonLen = findCommonStringLength(len1, len2);

  let result = '';

  while (
    i < len1 &&
    j < len2 &&
    result.length < commonLen &&
    str1[i] === str2[j]
  ) {
    result += str1[i];
    i++;
    j++;
  }

  if (
    result.length > 0 &&
    isDivisible(str1, result) &&
    isDivisible(str2, result)
  )
    return result;
  else return '';
}

function findCommonStringLength(len1, len2) {
  let common = 1;
  const minLength = Math.min(len1, len2);

  for (let i = 2; i <= minLength; i++) {
    if (len1 % i == 0 && len2 % i == 0) common = i;
  }

  return common;
}

function isDivisible(str, x) {
  let tmp = '';
  for (let i = 0; i < str.length / x.length; i++) {
    tmp += x;
  }
  return str === tmp;
}

console.log(findGreatestCommonDivisorString('ABCABC', 'ABC')); //ABC
console.log(findGreatestCommonDivisorString('ABABAB', 'ABAB')); //AB
console.log(findGreatestCommonDivisorString('LEET', 'CODE')); //AB
