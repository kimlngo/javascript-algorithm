'use strict';

import { TreeNode } from './data/TreeNode.js';
import { isValidBST } from './ValidBST.js';

function sortedArrayToBST(nums) {
  const length = nums.length;

  if (length === 0) return null;
  else if (length === 1) return new TreeNode(nums[0]);

  let root;
  if (length === 2) {
    root = new TreeNode(nums[1]);
    root.left = new TreeNode(nums[0]);
  } else if (length === 3) {
    root = new TreeNode(nums[1]);
    root.left = new TreeNode(nums[0]);
    root.right = new TreeNode(nums[2]);
  } else {
    // more than 3 elements
    const mid = Math.trunc(length / 2);
    root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1, length));
  }

  return root;
}

const arrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const root = sortedArrayToBST(arrs);
console.log(root);

console.log(isValidBST(root));
