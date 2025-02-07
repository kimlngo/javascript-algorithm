'use strict';

function isUniqueOccurred(nums) {
  let freqMap = new Map();
  let occurence = new Map();

  for (let n of nums) {
    if (!freqMap.get(n)) freqMap.set(n, 0);

    freqMap.set(n, freqMap.get(n) + 1);
  }

  for (let [key, val] of freqMap) {
    if (!occurence.get(val)) occurence.set(val, []);

    occurence.get(val).push(key);

    if (occurence.get(val).length > 1) return false;
  }

  return true;
}

console.log(isUniqueOccurred([1, 2, 3]));
