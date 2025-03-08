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

function maxTwinSum(head) {
  const stack = [];

  let maxSum = 0;
  let cur = head;
  let count = 0;

  while (cur !== null) {
    stack.push(cur);
    count++;
    cur = cur.next;
  }

  let middleIndex = count / 2;
  cur = head;
  for (let i = 0; i < middleIndex; i++) {
    const popNode = stack.pop();
    const sum = cur.val + popNode.val;
    if (maxSum < sum) maxSum = sum;

    cur = cur.next;
  }

  return maxSum;
}

const head = new ListNode(4);
const two = new ListNode(2);
const three = new ListNode(2);
const four = new ListNode(3);

head.setNext(two);
two.setNext(three);
three.setNext(four);

console.log(maxTwinSum(head));
