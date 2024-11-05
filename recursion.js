'use strict';

console.log('#### Example ####');

countdown(10);
function countdown(n) {
  if (n === 0) {
    console.log('All Done!');
    return;
  }

  console.log(n);
  countdown(n - 1);
}

console.log('#### POWER ####');
console.log(power(2, 0)); //1
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16

function power(base, exp) {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

console.log('#### FACTORIAL ####');
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
function factorial(n) {
  if (n === 1 || n === 0) return 1;

  return n * factorial(n - 1);
}

console.log('#### RECURSION WITH HELPER METHOD ####');
console.log('collectOddVal', collectOddVal([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function collectOddVal(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log('collectEvenVal', collectEvenVal([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function collectEvenVal(arr) {
  const result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 === 0) result.push(arr[0]);

  return result.concat(collectEvenVal(arr.slice(1)));
}

console.log('#### PRODUCT OF AN ARRAY ####');
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

function productOfArray(arr) {
  let product = 1;

  function helper(input) {
    if (input.length === 0) return 1;

    console.log(input[0], input, product);
    product = input[0] * helper(input.slice(1));
    return product;
  }

  helper(arr);

  return product;
}
console.log('#### RECURSIVE RANGE ####');
console.log(recursiveRange(6));
console.log(recursiveRange(10));
function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

console.log('#### RECURSIVE FIBONACCI ####');

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
