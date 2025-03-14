'use strict';

function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const charMap = new Map();
  const wordMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = words[i];

    if (!charMap.get(p)) charMap.set(p, word);
    else {
      if (charMap.get(p) !== word) return false;
    }

    if (!wordMap.get(word)) wordMap.set(word, p);
    else {
      if (wordMap.get(word) !== p) return false;
    }
  }

  return true;
}

console.log(wordPattern('jquery', 'jquery'));
