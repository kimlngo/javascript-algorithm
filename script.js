'use strict';

const arr1 = [1, 2, 3];
const arr2 = [4, 4, 1];

console.log(`is ${arr1} same as ${arr2} ? ${same(arr1, arr2)}`);

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const map1 = arrToMap(arr1);
  const map2 = arrToMap(arr2);

  for (const [k1, v1] of map1.entries()) {
    const k2 = k1 ** 2;
    const v2 = map2.get(k2);

    if (!v2 || v1 !== v2) return false;
  }
  return true;
}

function arrToMap(arr) {
  const result = new Map();

  arr.forEach(el => {
    if (result.get(el)) result.set(el, result.get(el) + 1);
    else result.set(el, 1);
  });

  return result;
}
