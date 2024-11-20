'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    const popNode = this.first;

    if (this.length === 1) {
      [this.first, this.last] = [null, null];
    } else {
      this.first = popNode.next;
      popNode.next = null;
    }

    this.length--;
    return popNode.val;
  }

  print() {
    if (this.length === 0) {
      console.log('-- empty --');
      return;
    }

    let cur = this.first;
    const arr = [];
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }

    console.log(`--- length: ${this.length} --- ${arr.join(' ')} ---`);
  }
}

console.log('----- Stack Push -----');
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log('--- pop ---');
console.log(stack.pop(), stack.length);
console.log(stack.pop(), stack.length);
console.log(stack.pop(), stack.length);
console.log(stack.pop(), stack.length);
