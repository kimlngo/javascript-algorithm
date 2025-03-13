'use strict';

import { ListNode } from './data/ListNode.js';

function oddEvenList(head) {
  if (head === null || head.next == null || head.next.next == null) return head;

  let oddStart = head;
  let odd = head;
  let even = head.next;
  let evenStart = head.next;
  let isOdd = true;

  let cur = head.next.next;

  while (cur !== null) {
    if (isOdd) {
      odd.next = cur;
      odd = cur;
      isOdd = false;
    } else {
      even.next = cur;
      even = cur;
      isOdd = true;
    }
    cur = cur.next;
  }

  odd.next = evenStart;
  if (!isOdd) even.next = null;

  return oddStart;
}

function print(head) {
  let cur = head;
  let str = '';

  while (cur !== null) {
    str += cur.val + ' -> ';
    cur = cur.next;
  }

  console.log(str.substring(0, str.length - 4));
}

const head = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);
const six = new ListNode(6);

head.setNext(two);
two.setNext(three);
three.setNext(four);
four.setNext(five);
five.setNext(six);

print(oddEvenList(head));
