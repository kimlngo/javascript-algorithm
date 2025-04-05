'use strict';

import { createLinkedList, printLinkedList } from './util/NodeUtil.js';

function mergeKSortedList(lists) {
  if (!lists || lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const sorted = lists
    .map(l => convertLinkedListToList(l))
    .flat()
    .sort((n1, n2) => n1.val - n2.val);

  let head = sorted[0];

  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].next = null;
    sorted[i + 1].next = null;
    sorted[i].next = sorted[i + 1];
  }

  return head;
}

function convertLinkedListToList(head) {
  if (!head) return null;
  if (!head.next) return [head];

  const result = [];
  let tmp = head;

  while (tmp) {
    result.push(tmp);
    tmp = tmp.next;
  }

  return result;
}

const h1 = createLinkedList([1, 4, 5]);
const h2 = createLinkedList([1, 3, 4]);
const h3 = createLinkedList([2, 6]);

// printLinkedList(h1);
// printLinkedList(h2);
// printLinkedList(h3);

// printLinkedList(mergeKSortedList([h1, h2, h3]));
printLinkedList(createLinkedList([]));
console.log(mergeKSortedList([createLinkedList([]), createLinkedList([])]));
