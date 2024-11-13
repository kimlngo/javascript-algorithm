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

  shift() {
    if (this.length === 0) return undefined;

    const node = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    node.next = null;
    return node;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let cur = this.head;
    for (let i = 0; i < index; i++) cur = cur.next;

    return cur;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;

    node.val = val;
    return true;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.print();
