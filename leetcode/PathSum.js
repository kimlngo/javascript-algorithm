'use strict';

import { TreeNode } from './data/TreeNode.js';

function hasPathSum(root, targetSum) {
  if (!root) return false;

  let holder = {
    sum: 0,
    routeFound: false,
  };

  function traverse(node) {
    if (!node.left && !node.right) {
      //leaf node case
      if (holder['sum'] + node.val === targetSum) holder['routeFound'] = true;

      return;
    }

    holder['sum'] += node.val;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    holder['sum'] -= node.val;
  }

  traverse(root);
  return holder['routeFound'];
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
