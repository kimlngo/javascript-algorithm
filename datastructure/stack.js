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
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    const popNode = this.first;

    if (this.size === 1) {
      [this.first, this.last] = [null, null];
    } else {
      this.first = popNode.next;
      popNode.next = null;
    }

    this.size--;
    return popNode.val;
  }

  print() {
    if (this.size === 0) {
      console.log('-- empty --');
      return;
    }

    let cur = this.first;
    const arr = [];
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }

    console.log(`--- length: ${this.size} --- ${arr.join(' ')} ---`);
  }
}

console.log('----- Stack Push -----');
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log('--- pop ---');
console.log(stack.pop(), stack.size);
console.log(stack.pop(), stack.size);
console.log(stack.pop(), stack.size);
console.log(stack.pop(), stack.size);
