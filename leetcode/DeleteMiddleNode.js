'use strict';

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }
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

function deleteMiddle(head) {
  if (head == null) return head;
  if (head.next == null) {
    head = null;
    return head;
  }

  let cur = head;
  let count = 0;

  while (cur !== null) {
    count++;
    cur = cur.next;
  }

  let middleIndex = Math.floor(count / 2);
  let index = 0;
  cur = head;

  while (cur !== null) {
    if (index === middleIndex - 1) {
      let middleNode = cur.next;
      let nextNode = middleNode.next;
      cur.next = nextNode;
      middleNode.next = null;
      break;
    }
    index++;
    cur = cur.next;
  }

  return head;
}

const head = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);
const six = new ListNode(6);
// const seven = new ListNode(7);

head.setNext(two);
two.setNext(three);
three.setNext(four);
four.setNext(five);
five.setNext(six);
// six.setNext(seven);

print(deleteMiddle(head));
