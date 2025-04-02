'use strict';

import { TreeNode } from './data/TreeNode.js';

function rightSideView(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  let length;

  while (queue.length !== 0) {
    length = queue.length;

    for (let i = 0; i < length; i++) {
      const tmp = queue.shift();

      if (i === length - 1) result.push(tmp.val);

      if (tmp.left) queue.push(tmp.left);
      if (tmp.right) queue.push(tmp.right);
    }
  }

  return result;
}

function leftSideView(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  let length;

  while (queue.length !== 0) {
    length = queue.length;

    for (let i = 0; i < length; i++) {
      const tmp = queue.shift();

      if (i === 0) result.push(tmp.val);

      if (tmp.left) queue.push(tmp.left);
      if (tmp.right) queue.push(tmp.right);
    }
  }

  return result;
}

var root = new TreeNode(1);
var two = new TreeNode(2);
var three = new TreeNode(3);
var four = new TreeNode(4);
var five = new TreeNode(5);

root.left = two;
root.right = three;
two.right = five;
three.right = four;

console.log('right side view: ' + rightSideView(root)); //[1, 3, 4]
console.log('left side view: ' + leftSideView(root)); //[1, 2, 5]

root.left = two;
root.right = three;
two.left = four;
four.left = five;

console.log('right side view: ' + rightSideView(root)); //[1, 3, 4, 5]
console.log('left side view: ' + leftSideView(root)); //[1, 2, 4, 5]

root.right = three;
root.left = null;
three.left = null;
three.right = null;
console.log('right side view: ' + rightSideView(root)); //[1, 3]
console.log('left side view: ' + leftSideView(root)); //[1, 3]
