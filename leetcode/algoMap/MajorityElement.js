'use strict';

function majorityElement(nums) {
  //1) construct frequency map
  const freqMap = buildFreqMap(nums);

  //2) calculate the majority threshold
  const majThreshold = Math.trunc(nums.length / 2);

  //3) filter to find the majority element
  return [...freqMap.entries()].filter(entry => entry[1] > majThreshold)[0][0];
}

function buildFreqMap(nums) {
  const map = new Map();

  for (let n of nums) {
    if (!map.get(n)) map.set(n, 0);

    map.set(n, map.get(n) + 1);
  }
  return map;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
