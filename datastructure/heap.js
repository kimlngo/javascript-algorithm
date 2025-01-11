'use strict';

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex] < this.values[childIndex]
    ) {
      //prettier-ignore
      //swap parent & child
      [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }

    console.log(this.values);
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
