'use strict';

import { ListNode } from './data/ListNode.js';
import { createLinkedList, printLinkedList } from './util/NodeUtil.js';

function addTwoNumbers(l1, l2) {
  let head = new ListNode((l1.val + l2.val) % 10);
  let carryOver = Math.trunc((l1.val + l2.val) / 10);
  let c1 = l1.next;
  let c2 = l2.next;
  let cur = head;
  let sum;
  while (c1 && c2) {
    sum = c1.val + c2.val + carryOver;
    cur.next = new ListNode(sum % 10);
    carryOver = Math.trunc(sum / 10);

    cur = cur.next;
    c1 = c1.next;
    c2 = c2.next;
  }

  if (!c1 && !c2) {
    //both l1 & l2 have the same length
    if (carryOver) {
      cur.next = new ListNode(carryOver);
    }
  } else {
    //one of them is larger the other
    if (carryOver) {
      cur.next = addTwoNumbers(c1 !== null ? c1 : c2, new ListNode(carryOver));
    } else {
      cur.next = c1 !== null ? c1 : c2;
    }
  }

  return head;
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
printLinkedList(addTwoNumbers(l1, l2));

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
printLinkedList(addTwoNumbers(l1, l2));

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
printLinkedList(addTwoNumbers(l1, l2));
