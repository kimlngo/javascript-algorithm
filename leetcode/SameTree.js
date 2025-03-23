'use strict';

import { TreeNode } from './data/TreeNode.js';

function isSameTree(p, q) {
  return traverseBFS(p) === traverseBFS(q);
}

function traverseBFS(node) {
  if (!node) return '';

  const queue = [];
  queue.push(node);
  let str = '';
  let tmp;
  while (queue.length !== 0) {
    tmp = queue.shift();
    if (!tmp) str += 'null|';
    else {
      str += tmp.val + '|';
      queue.push(tmp.left);
      queue.push(tmp.right);
    }
  }
  console.log(str);
  return str;
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = null;

const q = new TreeNode(1);
q.left = null;
q.right = new TreeNode(2);

console.log(isSameTree(p, q));
