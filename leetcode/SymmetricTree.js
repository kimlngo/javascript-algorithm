'use strict';

import { TreeNode } from './data/TreeNode.js';

function isSymmetricTree(root) {
  return checkSymmetric(root.left, root.right);
}

function checkSymmetric(n1, n2) {
  if (!n1 && !n2) return true;

  if (!n1 || !n2) return false;

  return (
    n1.val === n2.val &&
    checkSymmetric(n1.left, n2.right) &&
    checkSymmetric(n1.right, n2.left)
  );
}

const root = new TreeNode(1);
const left = new TreeNode(2);
left.left = new TreeNode(3);
left.right = new TreeNode(4);

const right = new TreeNode(2);
right.left = new TreeNode(4);
right.right = new TreeNode(3);

root.left = left;
root.right = right;

console.log(isSymmetricTree(root));
