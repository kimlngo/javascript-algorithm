'use strict';

function containsNearbyDuplicates(nums, k) {
  const freqMap = new Map();

  for (let [i, n] of nums.entries()) {
    if (!freqMap.get(n)) {
      freqMap.set(n, {
        count: 0,
        indexes: [],
      });
    }

    const obj = freqMap.get(n);
    obj.count += 1;
    obj.indexes.push(i);

    if (obj.count > 1) {
      const len = obj.indexes.length;
      const diff = obj.indexes[len - 1] - obj.indexes[len - 2];
      if (diff <= k) return true;
    }
  }

  return false;
}

console.log(containsNearbyDuplicates([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicates([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicates([1, 2, 3, 1, 2, 3], 2));
