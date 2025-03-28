'use strict';

import { TreeNode } from './data/TreeNode.js';

function treeNodeCount(root) {
  if (!root) return 0;
  const nodes = [];

  function traverse(node) {
    nodes.push(node);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root, nodes);
  return nodes.length;
}

const root = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);

root.left = two;
root.right = three;

two.left = four;
two.right = five;
three.left = six;

console.log(treeNodeCount(root));
