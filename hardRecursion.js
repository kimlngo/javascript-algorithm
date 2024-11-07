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

console.log('#### capitalizeFirst ####');

console.log(capitalizeFirst(['car', 'taco', 'banana']));

function capitalizeFirst(strArr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    let word = input[0];
    word = word[0].toUpperCase() + word.slice(1);
    result.push(word);

    helper(input.slice(1));
  }

  helper(strArr);
  return result;
}

console.log('#### nestedEvenSum ####');

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

function nestedEvenSum(obj) {
  let sum = 0;

  function sumVal(input) {
    if (input.length === 0) return;

    if (Number.isFinite(input[0]) && input[0] % 2 === 0) sum += input[0];
    else if (typeof input[0] === 'object') sumVal(Object.values(input[0]));

    sumVal(input.slice(1));
  }

  sumVal(Object.values(obj));
  return sum;
}

console.log('#### capitalize each word ####');
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));

function capitalizeWords(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    result.push(input[0].toUpperCase());
    helper(input.slice(1));
  }

  helper(arr);
  return result;
}

console.log('#### stringify implementation ####');

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
function stringifyNumbers(obj) {
  const result = {};

  function helper(input) {
    for (const key of Object.keys(input)) {
      const val = input[key];
      console.log(key, val);

      if (Number.isFinite(val)) {
        result[key] = String(obj[key]);
      } else if (typeof val === 'object' && !Array.isArray(val)) {
        result[key] = stringifyNumbers(val);
      } else {
        result[key] = obj[key];
      }
      console.log('result', result);
    }
  }

  helper(obj);

  return result;
}

console.log('#### collect strings ####');

const obj3 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj3));
function collectStrings(obj) {
  const result = [];

  function helper(input) {
    for (const [key, val] of Object.entries(input)) {
      console.log(key, val);
      if (typeof val === 'string') result.push(val);
      else if (typeof val === 'object' && !Array.isArray(obj)) helper(val);
    }
  }

  helper(obj);
  return result;
}
