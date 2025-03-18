'use strict';

import { ListNode } from './../data/ListNode.js';

function createLinkedList(array) {
  const result = [];
  if (!array || array.length === 0) return result;

  if (array.length === 1) return new ListNode(array[0]);

  //two nodes and above
  const head = new ListNode(array[0]);
  let cur = head;

  for (let i = 1; i < array.length; i++) {
    const newNode = new ListNode(array[i]);
    cur.setNext(newNode);
    cur = cur.next;
  }

  return head;
}

export { createLinkedList };
