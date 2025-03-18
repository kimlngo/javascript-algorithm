'use strict';

import { ListNode } from './data/ListNode.js';
import { createLinkedList } from './util/NodeUtil.js';

function hasCycle(head) {
  if (!head || !head.next) return false;

  const visited = [];
  let cur = head;

  while (cur) {
    if (!cur.next) return false;

    if (hasVisited(visited, cur)) return true;

    visited.push(cur);
    cur = cur.next;
  }

  return false;
}

function hasVisited(visited, cur) {
  if (!visited || visited.length === 0) return false;

  for (let node of visited) {
    if (Object.is(node, cur) && node.val === cur.val) return true;
  }

  return false;
}

const h1 = createLinkedList([
  -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14,
  14, 2, 13, -24, 21, 23, -21, 5,
]);
console.log(hasCycle(h1));
