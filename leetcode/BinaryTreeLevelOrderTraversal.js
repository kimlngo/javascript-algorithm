'use strict';

import { TreeNode } from './data/TreeNode.js';

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  let length;
  let tmp;
  while (queue.length !== 0) {
    length = queue.length;

    const inner = [];
    for (let i = 0; i < length; i++) {
      tmp = queue.shift();

      inner.push(tmp.val);
      if (tmp.left) queue.push(tmp.left);
      if (tmp.right) queue.push(tmp.right);
    }

    result.push(inner);
  }

  return result;
}

var root = new TreeNode(3);
var nine = new TreeNode(9);
var twenty = new TreeNode(20);
var fifteen = new TreeNode(15);
var seven = new TreeNode(7);

root.left = nine;
root.right = twenty;

twenty.left = fifteen;
twenty.right = seven;

console.log(levelOrder(root));

var one = new TreeNode(1);
console.log(levelOrder(one));

console.log(levelOrder(null));
