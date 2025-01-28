'use strict';

//1, 1, 2, 3, 5, 8, ...
const fib_naive = function (n) {
  if (n <= 2) return 1;

  return fib_naive(n - 1) + fib_naive(n - 2);
};

const fib_memo = function (n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) {
    memo[n] = 1;
    return 1;
  }

  const tmp = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = tmp;
  return tmp;
};

const fib_table = function (n) {
  let first = 1,
    second = 1;
  let result;

  for (let i = 3; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
};
