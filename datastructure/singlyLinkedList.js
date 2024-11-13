'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      //empty list case
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail == null;
      this.length--;
      return removedNode;
    }

    let cur = this.head;
    while (cur) {
      if (cur.next === this.tail) {
        //found the 2nd last node
        const removedNode = this.tail;
        this.tail = cur;
        this.tail.next = null;
        this.length--;
        return removedNode;
      }
      cur = cur.next;
    }
  }

  print() {
    let str = [];
    let cur = this.head;
    while (cur) {
      str.push(cur.val);
      cur = cur.next;
    }

    console.log(str.join(' '));
  }
}

const list = new SinglyLinkedList();
list.push(5);
list.push(0);
list.push(2);

list.print();
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
