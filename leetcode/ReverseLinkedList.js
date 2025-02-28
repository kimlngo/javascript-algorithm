'use strict';

function testReverseLinkedList() {
  const head = new ListNode(1);
  const two = new ListNode(2);
  const three = new ListNode(3);
  const four = new ListNode(4);
  const five = new ListNode(5);

  head.setNext(two);
  two.setNext(three);
  three.setNext(four);
  four.setNext(five);

  console.log(head);

  console.log('reverse');

  console.log(reverseLinkedList(head));
}

function reverseLinkedList(head) {
  let arr = [];
  let cur = head;

  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }

  const newHead = arr.pop();
  cur = newHead;

  while (arr.length !== 0) {
    cur.next = arr.pop();
    cur = cur.next;
  }

  cur.next = null;

  return newHead;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }
}

testReverseLinkedList();
