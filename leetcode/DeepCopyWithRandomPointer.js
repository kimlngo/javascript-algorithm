'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) return null;
  else if (!head.next) {
    const newHead = new Node(head.val);
    if (!head.random) newHead.random = null;
    else newHead.random = newHead;

    return newHead;
  }

  //two nodes and above
  const map = new Map(); //key-value pair is [old, new];
  const newHead = new Node(head.val);
  let oldCur = head;
  let newCur = newHead;
  map.set(head, newHead);

  while (oldCur.next) {
    const oldNext = oldCur.next;
    const newNext = new Node(oldNext.val);

    newCur.next = newNext;
    map.set(oldNext, newNext);

    oldCur = oldCur.next;
    newCur = newCur.next;
  }

  oldCur = head;
  newCur = newHead;

  while (oldCur) {
    const oldRandom = oldCur.random;
    if (!oldRandom) newCur.random = null;
    else {
      const newRandom = map.get(oldRandom);
      newCur.random = newRandom;
    }

    oldCur = oldCur.next;
    newCur = newCur.next;
  }

  return newHead;
}
