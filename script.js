'use strict';

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 4];

console.log(`is ${arr1} same as ${arr2} ? ${same(arr1, arr2)}`);

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const counter1 = arrToObj(arr1);
  const counter2 = arrToObj(arr2);

  for (const k1 of Object.keys(counter1)) {
    const num1 = Number(k1);
    const num2 = Math.pow(num1, 2);

    if (
      !counter2[String(num2)] ||
      counter1[String(num1)] !== counter2[String(num2)]
    )
      return false;
  }
  return true;
}

function arrToObj(arr1) {
  const result = {};

  arr1.forEach(el => {
    if (result[el]) result[el] += 1;
    else result[el] = 1;
  });

  return result;
}
