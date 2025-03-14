'use strict';

function canConstruct(ransomNote, magazine) {
  const ransomFreqMap = constructFreqCounterMap(ransomNote);
  const magFreqMap = constructFreqCounterMap(magazine);

  for (let key of ransomFreqMap.keys()) {
    if (!magFreqMap.get(key) || magFreqMap.get(key) < ransomFreqMap.get(key))
      return false;
  }

  return true;
}

function constructFreqCounterMap(input) {
  const freqMap = new Map();

  for (let c of input) {
    if (!freqMap.get(c)) freqMap.set(c, 0);

    freqMap.set(c, freqMap.get(c) + 1);
  }

  return freqMap;
}

console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aab', 'ab'));
