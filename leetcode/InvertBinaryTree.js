'use strict';

import { TreeNode } from './data/TreeNode.js';
import { traverseBFS } from './util/TreeUtil.js';

function invertBinaryTree(root) {
  if (!root) return root;

  invert(root);
  return root;
}

function invert(node) {
  if (!node.left && !node.right) return;

  if (node.left) invert(node.left);
  if (node.right) invert(node.right);

  const tmp = node.left;
  node.left = node.right;
  node.right = tmp;
}

const root = new TreeNode(4);
const two = new TreeNode(2);
const seven = new TreeNode(7);

const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);

root.left = two;
root.right = seven;

two.left = one;
two.right = three;

seven.left = six;
seven.right = nine;

traverseBFS(root);
invertBinaryTree(root);
traverseBFS(root);
