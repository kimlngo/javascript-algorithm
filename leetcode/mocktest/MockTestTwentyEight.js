'use strict';

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));

console.log(balancedStringSplit('RLRRLLRLRL')); //4
console.log(balancedStringSplit('RLRRRLLRLL')); //2
console.log(balancedStringSplit('LLLLRRRR')); //1

function commonChars(words) {
  //1) create freq map for each words
  const listMap = words.map(word => generateFreqCounterMap(word));

  //2) find out all the characters
  const tmp = [];

  listMap.map(m => m.keys()).forEach(keys => tmp.push(...Array.from(keys)));
  const allChars = new Set(tmp);

  //3) filter those chars that appeared in all maps
  const commonChars = [...allChars].filter(key =>
    appearedInAllMap(key, listMap)
  );

  //4) find out the minimum counter of each characters in listMap
  const commonCharsFreq = new Map();

  commonChars.forEach(c => {
    commonCharsFreq.set(c, Math.min(...listMap.map(map => map.get(c))));
  });

  //5) regenerate the char array and return
  const result = [];

  for (let key of commonCharsFreq.keys()) {
    for (let i = 0; i < commonCharsFreq.get(key); i++) {
      result.push(key);
    }
  }

  return result;
}

function appearedInAllMap(c, listMap) {
  for (const map of listMap) {
    if (!map.has(c)) return false;
  }
  return true;
}

function generateFreqCounterMap(word) {
  const map = new Map();

  for (const c of word) {
    if (!map.get(c)) map.set(c, 0);
    map.set(c, map.get(c) + 1);
  }

  return map;
}

function balancedStringSplit(s) {
  let lCount = 0,
    rCount = 0,
    balanceCount = 0;

  for (const c of s) {
    if (c === 'L') lCount++;
    else rCount++;

    if (lCount === rCount) {
      balanceCount++;
      lCount = 0;
      rCount = 0;
    }
  }

  return balanceCount;
}
