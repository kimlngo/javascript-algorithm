'use strict';

import { TreeNode } from './data/TreeNode.js';

function averageOfLevels(root) {
  const result = [];
  const queue = [root];
  let length;

  while (queue.length) {
    //traverse level by level
    let sum = 0;
    length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / length);
  }
  return result;
}

const root = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);

root.left = nine;
root.right = twenty;

twenty.left = fifteen;
twenty.right = seven;

console.log(averageOfLevels(root));
