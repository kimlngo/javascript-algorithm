'use strict';

import { TreeNode } from './data/TreeNode.js';

function hasPathSum(root, targetSum) {
  if (!root) return false;
  let sum = 0;
  let found = false;

  let holder = {
    sum: 0,
    routeFound: false,
  };

  function traverse(node) {
    if (!node.left && !node.right) {
      //leaf node case
      if (sum + node.val === targetSum) found = true;

      return;
    }

    sum += node.val;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    sum -= node.val;
  }

  traverse(root);
  return found;
}

const root = new TreeNode(5);
const four = new TreeNode(4);
const eleven = new TreeNode(11);
const seven = new TreeNode(7);
const two = new TreeNode(2);

const eight = new TreeNode(8);
const thirteen = new TreeNode(13);
const fourTwo = new TreeNode(4);
const one = new TreeNode(1);

root.left = four;
root.right = eight;

four.left = eleven;
eleven.left = seven;
eleven.right = two;

eight.left = thirteen;
eight.right = fourTwo;
fourTwo.right = one;

console.log(hasPathSum(root, 22));
