'use strict';

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
