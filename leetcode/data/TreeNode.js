'use strict';

export class TreeNode {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = null;
    this.right = null;
  }

  setLeft(left) {
    this.left = left === undefined ? null : left;
  }

  setRight(right) {
    this.right = right === undefined ? null : right;
  }
}
