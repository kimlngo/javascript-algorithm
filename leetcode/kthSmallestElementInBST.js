'use strict';

function kthSmallestElement(root, k) {
  const flatten = [];

  function traverse(node) {
    if (node.left) traverse(node.left);

    flatten.push(node.val);

    if (node.right) traverse(node.right);
  }

  traverse(root);

  return flatten[k - 1];
}
