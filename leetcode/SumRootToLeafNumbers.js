'use strict';

import { TreeNode } from './data/TreeNode.js';

function sumNumbers(root) {
  const stack = [];
  let sum = 0;

  function traverse(node) {
    if (!node.left && !node.right) {
      //reach the leaf node
      stack.push(node);
      const tmp = getNumberValue(stack);
      sum += tmp;
      stack.pop();
      return;
    }

    stack.push(node);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    stack.pop();
  }

  traverse(root);
  return sum;
}

function getNumberValue(arr) {
  let base,
    tenth,
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    base = arr[i].val;
    tenth = 10 ** (arr.length - i - 1);
    sum += base * tenth;
  }
  return sum;
}
var root = new TreeNode(4);
var nine = new TreeNode(9);
var five = new TreeNode(5);
var one = new TreeNode(1);
var zero = new TreeNode(0);

root.left = nine;
root.right = zero;

nine.left = five;
nine.right = one;

console.log(sumNumbers(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(sumNumbers(root));
