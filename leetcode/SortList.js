'use strict';

import { createLinkedList, printLinkedList } from './util/NodeUtil.js';
function sortList(head) {
  if (!head || !head.next) return head;
  let nodeList = [];

  let tmp = head;
  while (tmp) {
    nodeList.push(tmp);
    tmp = tmp.next;
  }

  let sortedList = nodeList.sort((n1, n2) => n1.val - n2.val);
  let cur, next;
  for (let i = 0; i < sortedList.length - 1; i++) {
    cur = sortedList[i];
    next = sortedList[i + 1];
    cur.next = null;
    next.next = null;
    cur.next = next;
  }

  return sortedList[0];
}

const head = createLinkedList([4, 2, 3, 1]);
printLinkedList(head);

const sorted = sortList(head);
printLinkedList(sorted);
