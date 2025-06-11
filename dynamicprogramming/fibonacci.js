'use strict';

function naiveFib(n) {
  if (n < 2) return n;

  return naiveFib(n - 1) + naiveFib(n - 2);
}

function fibByDP() {
  const cache = {};

  return function fibFn(n) {
    if (cache[n]) {
      return cache[n];
    }

    if (n < 2) {
      cache[n] = n;
      return cache[n];
    }

    cache[n] = fibFn(n - 1) + fibFn(n - 2);
    return cache[n];
  };
}

function fibByDPBottomUp(n) {
  const cache = [0, 1];

  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache.pop();
}
const n = 180;
// const start1 = Date.now();
// console.log(naiveFib(n));
// const end1 = Date.now();
// console.log('Naive Fib takes: ' + (end1 - start1) + ' ms');

const start2 = Date.now();
const fib = fibByDP();
console.log(fib(n));
const end2 = Date.now();
console.log('Fib by DP takes: ' + (end2 - start2) + ' ms');

const start3 = Date.now();
console.log(fibByDPBottomUp(n));
const end3 = Date.now();
console.log('Fib by DP Bottom Up takes: ' + (end3 - start3) + ' ms');
