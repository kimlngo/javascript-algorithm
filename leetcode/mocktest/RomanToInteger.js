'use strict';

const valMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],

  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['XC', 90],
  ['CD', 400],
  ['CM', 900],
]);

function romanToInteger(s) {
  let val = 0,
    i = 0;

  while (i < s.length - 1) {
    const cur = s[i];
    const next = s[i + 1];

    const twoChars = cur + next;

    if (valMap.get(twoChars)) {
      //special 2-char case
      val += valMap.get(twoChars);
      i++;
    } else {
      val += valMap.get(cur);
    }

    i++;
  }

  //handle last char case
  if (i == s.length - 1) {
    val += valMap.get(s[i]);
  }

  return val;
}

console.log(romanToInteger('III'));
console.log(romanToInteger('VII'));
console.log(romanToInteger('MCMXCIV'));
