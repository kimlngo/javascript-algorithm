'use strict';

function traverseBFS(root) {
  if (!root) return console.log('Empty tree');

  const queue = [];
  queue.push(root);

  const list = [];

  let cur;
  while (queue.length !== 0) {
    cur = queue.shift();
    list.push(cur);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  console.log(list.map(node => node.val).join(' -> '));
}

export { traverseBFS };
