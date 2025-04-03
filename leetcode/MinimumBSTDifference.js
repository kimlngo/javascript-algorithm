'use strict';

function getMinimumDifference(root) {
  const flatten = [];

  function traverse(node) {
    if (node.left) traverse(node.left);

    flatten.push(node.val);

    if (node.right) traverse(node.right);
  }

  traverse(root);

  let min = Infinity;
  let diff;
  for (let i = 0; i < flatten.length; i++) {
    diff = Math.abs(flatten[i] - flatten[i + 1]);
    if (diff < min) min = diff;
  }

  return min;
}
