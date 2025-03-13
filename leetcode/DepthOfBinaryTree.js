'use strict';

import { TreeNode } from './data/TreeNode.js';

function depthFirstTraverse_Post(root) {
  const visited = [];

  const traverse = function (node) {
    if (!node) return;

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node);
  };

  traverse(root);
  return visited.map(node => node.val);
}

function maxDepth_DFS(node) {
  if (!node) return 0;

  return 1 + Math.max(maxDepth_DFS(node.left), maxDepth_DFS(node.right));
}

function maxDepth_BFS(node) {
  if (!node) return 0;

  const queue = [node];
  let depth = 0;

  while (queue.length !== 0) {
    depth++;
    const qLength = queue.length;

    for (let i = 0; i < qLength; i++) {
      const dequeueNode = queue.shift();
      if (dequeueNode.left) queue.push(dequeueNode.left);
      if (dequeueNode.right) queue.push(dequeueNode.right);
    }
  }
  return depth;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);

const twenty = new TreeNode(20);
twenty.left = new TreeNode(15);
const seven = new TreeNode(7);
seven.right = new TreeNode(8);
twenty.right = seven;

root.right = twenty;

console.log(maxDepth_DFS(root));
console.log(maxDepth_BFS(root));
