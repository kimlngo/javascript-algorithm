'use strict';

const cache = {
  0: 0,
  1: 1,
};

var fib = function (n) {
  if (cache[n] !== undefined) return cache[n];

  const result = fib(n - 1) + fib(n - 2);
  cache[n] = result;
  return result;
};

function fibByDPBottomUp(n) {
  if (n < 2) return n;

  const cache = [];
  cache.push(0);
  cache.push(1);

  for (let i = 2; i <= n; i++) cache[i] = cache[i - 1] + cache[i - 2];

  return cache[n];
}
console.log(fib(2));
console.log(fibByDPBottomUp(100));
