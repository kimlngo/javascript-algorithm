'use strict';

function maxVowels(s, k) {
  let maxCount = 0;

  //initial window
  for (let i = 0; i < k; i++) {
    console.log(s[i]);
    if (isVowel(s[i])) maxCount++;
  }

  //sliding window
  let count = maxCount;
  for (let i = 1; i <= s.length - k; i++) {
    console.log(s[i - 1], s[i + k - 1]);

    if (isVowel(s[i - 1])) count--;
    if (isVowel(s[i + k - 1])) count++;

    if (count > maxCount) maxCount = count;
  }

  console.log(maxCount);
  return maxCount;
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].includes(c);
}

maxVowels('abciiidef', 3);
