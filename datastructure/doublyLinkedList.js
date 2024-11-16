'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const popNode = this.tail;
    if (this.length === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.tail = this.tail.prev;
      [this.tail.next, popNode.prev] = [null, null];
    }

    this.length--;
    return popNode;
  }

  shift() {
    if (this.length === 0) return null;

    const removeNode = this.head;
    if (this.length === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removeNode.next = null;
    }

    this.length--;
    return removeNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      [this.head, this.tail] = [newNode, newNode];
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.head;
    else if (index === this.length - 1) return this.tail;
    else {
      let count, current;

      if (index <= this.length / 2) {
        //traverse from head
        count = 0;
        current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
      } else {
        //traverse from tail
        count = this.length - 1;
        current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
      }
      return current;
    }
  }

  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    //linking
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;

    //linking
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    //clean up foundNode;
    [foundNode.next, foundNode.prev] = [null, null];

    this.length--;
    return foundNode;
  }

  reverse() {
    let cur = this.tail;
    let tmp = null;

    for (let i = 0; i < this.length; i++) {
      cur.next = cur.prev;
      cur.prev = tmp;

      tmp = cur;
      cur = cur.next;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  print() {
    const values = [];

    let node = this.head;
    while (node) {
      values.push(node.val);
      node = node.next;
    }
    console.log(`length = ${this.length} ||`, values.join(' <-> '));
  }
}

const dll = new DoublyLinkedList();
for (let i = 0; i < 7; i++) {
  dll.push(i);
}

dll.print();
dll.reverse().print();
