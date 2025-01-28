'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      const node = this.head;
      [this.head, this.tail] = [null, null];
      this.length--;
      return node;
    } else {
      let cur = this.head;
      for (let i = 0; i < this.length - 2; i++) {
        cur = cur.next;
      }

      const node = this.tail;
      this.tail = cur;
      this.tail.next = null;

      this.length--;
      return node;
    }
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }

  print() {
    const result = [];
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
      result.push(cur.val);
      cur = cur.next;
    }

    console.log(
      'ssl lenght = ' + this.length + ' | [' + result.join(' - ') + ']'
    );
  }
}

const list = new SinglyLinkedList();
list.push(1).push(2).push(3).push(4);
