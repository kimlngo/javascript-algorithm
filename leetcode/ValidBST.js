'use strict';

import { TreeNode } from './data/TreeNode.js';
import { createTreeNode } from './util/TreeUtil.js';

function isValidBST(root) {
  const flatten = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    flatten.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);

  for (let i = 0; i < flatten.length - 1; i++) {
    if (flatten[i] >= flatten[i + 1]) return false;
  }

  return true;
}

var root = createTreeNode(2);
var one = createTreeNode(1);
var three = createTreeNode(3);

root.left = one;
root.right = three;

console.log(isValidBST(root));

root = createTreeNode(5);
var four = createTreeNode(4);
var six = createTreeNode(6);

root.left = one;
root.right = four;
four.left = three;
four.right = six;

console.log(isValidBST(root));
