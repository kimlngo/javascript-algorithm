'use strict';

function mergeString(word1, word2) {
  let i = 0;
  let length1 = word1.length;
  let length2 = word2.length;

  let result = '';

  while (i < length1 || i < length2) {
    if (i < length1) result += word1[i];
    if (i < length2) result += word2[i];

    i++;
  }
  return result;
}

console.log(mergeString('abc', 'hello'));
