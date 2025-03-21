'use strict';

import { ListNode } from './data/ListNode.js';
import { createLinkedList, printLinkedList } from './util/NodeUtil.js';

function deleteDuplicates(head) {
  if (!head || !head.next) return head;

  const list = [];
  const duplicates = new Set();

  let cur = head,
    next = cur.next;

  while (next) {
    if (cur.val !== next.val && !duplicates.has(cur.val)) {
      list.push(cur);
    } else {
      duplicates.add(cur.val);
    }

    cur = next;
    next = cur.next;
  }

  if (!duplicates.has(cur.val)) list.push(cur);

  if (list.length === 0) return null;

  const newHead = list[0];
  cur = newHead;
  cur.next = null;

  for (let i = 1; i < list.length; i++) {
    const node = list[i];
    node.next = null;

    cur.next = node;
    cur = node;
  }

  return newHead;
}

printLinkedList(deleteDuplicates(createLinkedList([1, 2, 3, 3, 4, 4, 5])));
printLinkedList(deleteDuplicates(createLinkedList([1, 1, 1, 2, 3])));
printLinkedList(deleteDuplicates(createLinkedList([1, 2, 2])));
printLinkedList(deleteDuplicates(createLinkedList([1, 1])));
