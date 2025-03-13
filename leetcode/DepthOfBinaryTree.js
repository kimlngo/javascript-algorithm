'use strict';

import { TreeNode } from './data/TreeNode.js';

function breathFirstTraverse(root) {
  const tmp = [];
  tmp.push(root);
  tmp.push('*');

  const queue = [];
  queue.push(root);

  const traverse = function () {
    if (queue.length === 0) return;

    const node = queue.shift();
    if (node) console.log(node.val);

    if (node.left) {
      queue.push(node.left);
      tmp.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
      tmp.push(node.right);
    }
    tmp.push('*');
    traverse();
  };

  traverse();
}

const root = new TreeNode(3);
root.setLeft(new TreeNode(9));

const twenty = new TreeNode(20);
const tmp = new TreeNode(15);
tmp.setLeft(new TreeNode(8));
twenty.setLeft(tmp);
twenty.setRight(new TreeNode(7));

root.setRight(twenty);

console.log('Level Count = ' + breathFirstTraverse(root));
