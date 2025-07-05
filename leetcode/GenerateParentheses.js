'use strict';

import { TreeNode } from './data/TreeNode.js';

const OPEN = '(';
const CLOSE = ')';

function generateParentheses(n) {
  const root = new TreeNode('(');

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();

    expandLeftRight(node, n);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  //traverse to get all leaves nodes
  return getAllLeafNodes(root);
}

function getAllLeafNodes(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(node.val);
      return;
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result;
}

function expandLeftRight(node, n) {
  if (!node) return;

  const count = countParentheses(node.val);
  if (count.openCount === n && count.closeCount === n) return;

  if (count.openCount < n) {
    node.left = new TreeNode(node.val + OPEN);
  }

  if (count.closeCount < n && count.closeCount < count.openCount) {
    node.right = new TreeNode(node.val + CLOSE);
  }
}

function countParentheses(str) {
  let openCount = 0,
    closeCount = 0;

  for (let c of str) {
    if (c === OPEN) openCount++;
    else closeCount++;
  }

  return { openCount, closeCount };
}

console.log(generateParentheses(4));
