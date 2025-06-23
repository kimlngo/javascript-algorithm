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

console.log(fib(2));
