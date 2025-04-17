'use strict';

const BALLOON = ['b', 'a', 'l', 'o', 'n'];

function maxNumOfBallons(word) {
  const freqMap = createFreqCounterMap(word);

  for (const c of BALLOON) {
    if (!freqMap.get(c)) return 0;
  }

  freqMap.set('o', Math.trunc(freqMap.get('o') / 2));
  freqMap.set('l', Math.trunc(freqMap.get('l') / 2));

  //entries spread return [[key, value], [key, value], [key, value], ...]
  const ballonEntries = [...freqMap.entries()].filter(entry =>
    BALLOON.includes(entry[0])
  );

  const freqArray = ballonEntries.map(e => e[1]);
  const noOfBallon = Math.min(...freqArray);
  return noOfBallon;
}

function createFreqCounterMap(word) {
  const map = new Map();

  for (const c of word) {
    if (!map.get(c)) map.set(c, 0);
    map.set(c, map.get(c) + 1);
  }

  return map;
}

console.log(maxNumOfBallons('nlaebolko'));
console.log(maxNumOfBallons('loonbalxballpoon'));
console.log(maxNumOfBallons('leetcode'));
console.log(maxNumOfBallons('balon'));
