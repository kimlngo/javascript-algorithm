'use strict';

import { TreeNode } from './data/TreeNode.js';

function leafSimilar(root1, root2) {
  const input1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 14];
  const r1 = extractLeafNode(constructTree(input1));

  const input2 = [
    3,
    5,
    1,
    6,
    71,
    4,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    9,
    8,
  ];
  const r2 = extractLeafNode(constructTree(input2));

  console.log('is leaf similar? - ' + isLeafSimilar(r1, r2));
}

function isLeafSimilar(leaf1, leaf2) {
  if (leaf1.length !== leaf2.length) return false;

  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i].val !== leaf2[i].val) return false;
  }
  return true;
}

function extractLeafNode(root) {
  const leaf = [];
  if (!root) return leaf;

  function extract(node) {
    if (!node) return;

    if (!node.left && !node.right) leaf.push(node);
    extract(node.left);
    extract(node.right);
  }

  extract(root);
  console.log(leaf.map(i => i.val));
  return leaf;
}

function constructTree(input) {
  const treeNodes = input.map(i => {
    if (i === null) return null;
    return new TreeNode(i);
  });
  const root = treeNodes[0];
  const maxIndex = Math.floor((treeNodes.length - 1) / 2);

  for (let i = 0; i <= maxIndex; i++) {
    const node = treeNodes[i];
    if (node) {
      const leftIdx = i * 2 + 1;
      const rightIdx = i * 2 + 2;

      if (leftIdx >= treeNodes.length) node.left = null;
      else node.left = treeNodes[leftIdx];

      if (rightIdx >= treeNodes.length) node.right = null;
      else node.right = treeNodes[rightIdx];
    }
  }
  return root;
}

leafSimilar(null, null);
