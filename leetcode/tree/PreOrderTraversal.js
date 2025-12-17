'use strict';

import { TreeNode } from '../data/TreeNode.js';

function preOrderTraversal(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  const result = [];

  const traverse = function (node) {
    if (!node) return;

    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return result;
}

const root = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
root.right = two;
two.left = three;

console.log(preOrderTraversal(root));
