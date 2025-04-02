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

function zigzagLevelOrder(root) {
  let levels = levelOrder(root);

  if (levels.length <= 1) return levels;

  for (let i = 0; i < levels.length; i++) {
    if (i % 2 == 1) {
      //reverse
      levels[i] = levels[i].reverse();
    }
  }

  return levels;
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

console.log(zigzagLevelOrder(root));

var one = new TreeNode(1);
console.log(zigzagLevelOrder(one));

console.log(zigzagLevelOrder(null));
