'use strict';

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));

console.log(customSortString('cba', 'abcd'));
console.log(customSortString('bcafg', 'abcd'));

/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 * @param {*} nums 
 */
function sortedSquares(nums) {
  const len = nums.length;

  if (nums[0] >= 0) {
    return nums.map(n => n ** 2);
  }

  if (nums[len - 1] <= 0) {
    return nums.map(n => n ** 2).reverse();
  }

  let mid = 0;
  while (nums[mid] < 0) mid++;

  let right = mid,
    left = mid - 1;
  let tmp = [];
  while (left >= 0 && right < len) {
    if (abs(nums[right]) <= abs(nums[left])) {
      tmp.push(nums[right]);
      right++;
    } else if (abs(nums[left]) < abs(nums[right])) {
      tmp.push(nums[left]);
      left--;
    }
  }

  if (left < 0) {
    for (let i = right; i < len; i++) {
      tmp.push(nums[i]);
    }
  } else {
    for (let i = left; i >= 0; i--) {
      tmp.push(nums[i]);
    }
  }

  console.log(tmp);
  return tmp.map(n => n ** 2);
}

function abs(n) {
  return Math.abs(n);
}

/**
 * You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

Example 1:
Input: order = "cba", s = "abcd"
Output: "cbad"

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:
Input: order = "bcafg", s = "abcd"
Output: "bcad"

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "dbca" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

 * @param {*} order 
 * @param {*} s 
 */
function customSortString(order, s) {
  const map = constFreqMap(s);

  //handle the order part
  let orderStr = '';
  for (let c of order) {
    if (map.get(c)) {
      orderStr += generateString(c, map.get(c));
    }
  }

  //handle the unorder part
  let unOrderStr = '';
  for (let c of s) {
    if (!order.includes(c)) {
      unOrderStr += c;
    }
  }

  return orderStr + unOrderStr;
}

function constFreqMap(str) {
  const map = new Map();

  for (let c of str) {
    if (!map.get(c)) map.set(c, 0);

    map.set(c, map.get(c) + 1);
  }

  return map;
}

function generateString(c, times) {
  let str = '';
  for (let i = 0; i < times; i++) {
    str += c;
  }
  return str;
}
