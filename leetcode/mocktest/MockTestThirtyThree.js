'use strict';

import { TreeNode } from './../data/TreeNode.js';

/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  let longStr, shortStr;

  if (str1.length >= str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    longStr = str2;
    shortStr = str1;
  }

  const longLen = longStr.length;
  const shortLen = shortStr.length;

  //1) special case of shortStr multiple equals to longStr
  if (
    longLen % shortLen === 0 &&
    longStr === shortStr.repeat(longLen / shortLen)
  ) {
    return shortStr;
  }

  //2) not special case
  let divideStr = '';
  for (let i = 1; i < shortLen; i++) {
    if (longLen % i === 0 && shortLen % i === 0) {
      const longSub = longStr.substring(0, i);
      const shortSub = shortStr.substring(0, i);

      if (
        longSub === shortSub &&
        longSub.repeat(longLen / i) === longStr &&
        shortSub.repeat(shortLen / i) === shortStr
      ) {
        divideStr = longSub;
      }
    }
  }

  return divideStr;
}

/**
 * Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9
   Output: true

   Input: root = [5,3,6,2,4,null,7], k = 28
   Output: false
 * @param {*} root
 * @param {*} k
 */
function findTarget(root, k) {
  const order = traverseInOrder(root);

  return isPairExist(order, k);
}

function isPairExist(order, target) {
  const len = order.length;

  if (len === 1) return false;
  else if (len === 2) {
    return target === order[0] + order[1];
  }

  //order has 3 & above items
  const min = order[0] + order[1];
  const max = order[len - 1] + order[len - 2];

  if (target < min || target > max) return false;

  //2-pointer approach
  let left = 0,
    right = len - 1;
  while (left < right) {
    const sum = order[left] + order[right];
    if (sum === target) return true;
    else if (sum > target) right--;
    else left++;
  }

  return false;
}

function traverseInOrder(node) {
  const order = [];

  const traverse = function (node) {
    if (!node) return;

    traverse(node.left);
    order.push(node.val);
    traverse(node.right);
  };

  traverse(node);
  return order;
}

console.log('==== Test 1 ====');

console.log(gcdOfStrings('ABCABC', 'ABC')); //ABC
console.log(gcdOfStrings('ABABAB', 'ABAB')); //AB
console.log(gcdOfStrings('BABABA', 'ABAB')); //AB
console.log(gcdOfStrings('LEET', 'CODE')); //Empty String

console.log('==== Test 2 ====');
const root = new TreeNode(5);
const three = new TreeNode(3);
const six = new TreeNode(6);
const two = new TreeNode(2);
const four = new TreeNode(4);
const seven = new TreeNode(7);

root.left = three;
root.right = six;

three.left = two;
three.right = four;
six.right = seven;

console.log(findTarget(root, 7)); //true
console.log(findTarget(root, 9)); //true
console.log(findTarget(root, 28)); //false
console.log(findTarget(root, 4)); //false
