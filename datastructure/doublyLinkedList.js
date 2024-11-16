'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.pre = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      [this.head, this.tail] = [node, node];
    } else {
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    const popNode = this.tail;
    if (this.length === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.tail = this.tail.pre;
      [this.tail.next, popNode.pre] = [null, null];
    }

    this.length--;
    return popNode;
  }

  print() {
    const values = [];

    let node = this.head;
    while (node) {
      values.push(node.val);
      node = node.next;
    }

    console.log(values.join(' <-> '));
  }
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.print();
dll.push(2);
dll.print();
dll.push(3);
dll.print();

console.log(dll.pop());
dll.print();
console.log(dll.pop());
dll.print();
console.log(dll.pop());
dll.print();
