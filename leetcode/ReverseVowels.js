'use strict';

function reverseVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsIdx = [];
  const result = [];
  let leftIdx, rightIdx;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) vowelsIdx.push(i);
  }

  console.log(vowelsIdx);

  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i].toLowerCase())) result.push(s[i]);
    else {
      leftIdx = vowelsIdx.indexOf(i);
      rightIdx = vowelsIdx.length - 1 - leftIdx;

      result.push(s[vowelsIdx[rightIdx]]);
    }
  }

  return result.join('');
}

console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));
