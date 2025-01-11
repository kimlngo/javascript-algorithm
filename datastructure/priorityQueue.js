'use strict';

class PQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);

    let childIdx = this.values.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (
      parentIdx >= 0 &&
      this.values[parentIdx].priority > this.values[childIdx].priority
    ) {
      this.swap(this.values, parentIdx, childIdx);

      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }

  dequeue() {
    //swap first and last
    const length = this.values.length;

    if (length === 0) return undefined;

    const end = length - 1;
    this.swap(this.values, 0, end);
    const topPriority = this.values.pop();

    let idx = 0,
      leftIdx = undefined,
      rightIdx = undefined;

    while (true) {
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;

      if (leftIdx >= length) break;

      if (
        this.values[idx]?.priority > this.values[leftIdx]?.priority &&
        this.values[idx]?.priority > this.values[rightIdx]?.priority
      ) {
        if (this.values[leftIdx].priority < this.values[rightIdx].priority) {
          //swapt with left side
          this.swap(this.values, idx, leftIdx);
          idx = leftIdx;
        } else {
          //swapt with right side
          this.swap(this.values, idx, rightIdx);
          idx = rightIdx;
        }
      } else if (this.values[idx]?.priority > this.values[leftIdx]?.priority) {
        //swapt with left side
        this.swap(this.values, idx, leftIdx);
        idx = leftIdx;
      } else if (this.values[idx]?.priority > this.values[rightIdx]?.priority) {
        //swapt with right side
        this.swap(this.values, idx, rightIdx);
        idx = rightIdx;
      } else break;
    }

    return topPriority;
  }

  swap(array, from, to) {
    [array[from], array[to]] = [array[to], array[from]];
  }
}

const pqueue = new PriorityQueue();
pqueue.enqueue(new PQueueNode('41', 41));
pqueue.enqueue(new PQueueNode('39', 39));
pqueue.enqueue(new PQueueNode('33', 33));
pqueue.enqueue(new PQueueNode('18', 18));
pqueue.enqueue(new PQueueNode('27', 27));
pqueue.enqueue(new PQueueNode('12', 12));
pqueue.enqueue(new PQueueNode('55', 55));

console.log(pqueue.values.map(node => node.value));
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.values);
