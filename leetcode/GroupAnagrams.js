'use strict';

function groupAnagrams(strs) {
  const map = new Map();

  let key;
  for (let s of strs) {
    key = sortStr(s);

    if (!map.get(key)) map.set(key, []);

    map.get(key).push(s);
  }

  return [...map.values()];
}

function sortStr(s) {
  return [...s].sort().join('');
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
