'use strict';

export class TreeNode {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = null;
    this.right = null;
  }
}
