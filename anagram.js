'use strict';

const str1 = 'anagram';
const str2 = 'nagaram';

console.log(`is ${str1} & ${str2} anagram? ${validAnagram(str1, str2)}`);

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = stringToMapCounter(str1);
  const map2 = stringToMapCounter(str2);

  for (const [c, count1] of map1.entries()) {
    const count2 = map2.get(c);

    if (!count2 || count1 !== count2) return false;
  }

  return true;
}

function stringToMapCounter(string) {
  const map = new Map();

  for (const c of string) {
    if (!map.get(c)) map.set(c, 1);
    else map.set(c, map.get(c) + 1);
  }

  console.log(map);
  return map;
}
