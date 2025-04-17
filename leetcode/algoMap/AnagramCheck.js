'use strict';

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sCharMap = createCharMap(s);
  const tCharMap = createCharMap(t);

  return (
    compareCharMaps(sCharMap, tCharMap) && compareCharMaps(tCharMap, sCharMap)
  );
}

function compareCharMaps(m1, m2) {
  for (const c of m1.keys()) {
    if (!m2.get(c) || m1.get(c) !== m2.get(c)) return false;
  }
  return true;
}

function createCharMap(word) {
  const charMap = new Map();

  for (const c of word) {
    if (!charMap.get(c)) charMap.set(c, 0);

    charMap.set(c, charMap.get(c) + 1);
  }

  return charMap;
}

console.log(isAnagram('anagram', 'naragam'));
console.log(isAnagram('cat', 'rat'));
