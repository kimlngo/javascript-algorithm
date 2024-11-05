'use strict';

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
function reverse(str) {
  let strArr = [...str];
  let result = [];

  function helper(input) {
    if (input.length === 0) return;
    result.push(input.at(-1));
    helper(input.slice(0, input.length - 1));
  }

  helper(strArr);
  return result.join('');
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
function isPalindrome(str) {
  const rev = reverse(str);
  return rev === str;
}

console.log('#### someRecursive ####');

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

function someRecursive(arr, fn) {
  let result = false;

  function helper(input, fn) {
    if (input.length === 0) return false;

    if (fn(input[0])) result = true;
    return result || helper(input.slice(1), fn);
  }

  helper(arr, fn);
  return result;
}

console.log('##### Flatten #####');
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

function flatten(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    if (!Array.isArray(input[0])) result.push(input[0]);
    else helper(input[0]);

    helper(input.slice(1));
  }

  helper(arr);
  return result;
}
