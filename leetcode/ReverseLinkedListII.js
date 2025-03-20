'use strict';

import { ListNode } from './data/ListNode.js';
import { createLinkedList, printLinkedList } from './util/NodeUtil.js';

function reverseBetween(head, left, right) {
  let i = 1,
    end;
  let cur = head;

  const queue = [];
  const stack = [];

  while (cur) {
    if (i < left || i > right) queue.push(cur);
    else stack.push(cur);

    cur = cur.next;
    i++;
  }

  end = i - 1;

  const reverseStart = stack.pop();
  cur = reverseStart;

  while (stack.length !== 0) {
    const pop = stack.pop();
    pop.next = null;
    cur.next = pop;
    cur = cur.next;
  }

  const reverseEnd = cur;

  const newHead = left > 1 ? queue.shift() : reverseStart;
  cur = newHead;

  for (let k = 0; k < left - 2; k++) {
    cur.next = queue.shift();
    cur = cur.next;
  }

  if (left > 1) cur.next = reverseStart;

  cur = reverseEnd;
  for (let k = 0; k < end - right; k++) {
    cur.next = queue.shift();
    cur = cur.next;
  }

  printLinkedList(newHead);
  return newHead;
}

const head = createLinkedList([2, 3, 4, 1, 5]);
console.log(reverseBetween(head, 2, 4)); //1 -> 4 -> 3 -> 2 -> 5
// console.log(reverseBetween(head, 1, 4)); //2 -> 3 -> 4 -> 1 -> 5
// console.log(reverseBetween(head, 2, 5));
// console.log(reverseBetween(head, 1, 5));
