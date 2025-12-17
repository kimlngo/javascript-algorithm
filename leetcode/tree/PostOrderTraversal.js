import { TreeNode } from '../data/TreeNode.js';

function postOrderTraversal(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  const result = [];

  const postTraverse = function (node) {
    if (!node) return;

    postTraverse(node.left);
    postTraverse(node.right);
    result.push(node.val);
  };

  postTraverse(root);
  return result;
}

const root = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
root.right = two;
two.left = three;

console.log(postOrderTraversal(root));
