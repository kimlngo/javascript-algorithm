'use strict';

import { TreeNode } from './data/TreeNode.js';

function flatten(root) {
  if (!root) return;
  if (!root.left && !root.right) return;
  const arr = [];

  function traverse(node) {
    arr.push(node);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);

  let cur, next;

  for (let i = 0; i < arr.length - 1; i++) {
    cur = arr[i];
    next = arr[i + 1];

    cur.left = null;
    cur.right = next;
  }

  if (next) next.right = null;
}

var root = new TreeNode(1);
var two = new TreeNode(2);
var three = new TreeNode(3);
var four = new TreeNode(4);
var five = new TreeNode(5);
var six = new TreeNode(6);

root.left = two;
root.right = five;
two.left = three;
two.right = four;
five.right = six;

flatten(root);
console.log(root);
