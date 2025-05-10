'use strict';

import { ListNode } from './../../data/ListNode.js';
import { createLinkedList, printLinkedList } from './../../util/NodeUtil.js';

function removeNthNode(head, n) {
  const size = calcListSize(head);

  if (size === n) {
    let tmp = head;
    head = head.next;
    tmp.next = null;
    return head;
  }

  const stop = size - n;
  let tmp = head;
  for (let i = 1; i < stop; i++) {
    tmp = tmp.next;
  }

  let next = tmp.next;
  tmp.next = next.next;
  next.next = null;
  return head;
}

function calcListSize(head) {
  let size = 1;
  let tmp = head;

  while (tmp.next) {
    tmp = tmp.next;
    size++;
  }

  return size;
}

const head = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(head);
// printLinkedList(removeNthNode(head, 1));
// printLinkedList(removeNthNode(head, 2));
// printLinkedList(removeNthNode(head, 3));
// printLinkedList(removeNthNode(head, 4));
printLinkedList(removeNthNode(head, 5));
