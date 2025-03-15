'use strict';

function isHappy(n) {
  let loopCount = 10;
  let digits = extractDigits(n);
  let sum = 0;

  while (loopCount > 0) {
    for (let d of digits) sum += d ** 2;

    if (sum === 1) return true;
    digits = extractDigits(sum);
    sum = 0;
    loopCount--;
  }
  return false;
}

function extractDigits(n) {
  const digits = [];

  while (n > 0) {
    digits.push(n % 10);
    n = Math.trunc(n / 10);
  }

  return digits;
}

console.log(isHappy(19));
console.log(isHappy(2));
