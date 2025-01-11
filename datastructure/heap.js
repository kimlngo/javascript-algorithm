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
  }

  extractMax() {
    //swap first and last
    //prettier-ignore
    const length = this.values.length;

    if (length === 0) return undefined;

    const end = length - 1;
    this.swap(this.values, 0, end);
    const max = this.values.pop();
    let idx = 0,
      leftIdx = undefined,
      rightIdx = undefined;

    while (true) {
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;

      if (
        this.values[idx] < this.values[leftIdx] &&
        this.values[idx] < this.values[rightIdx]
      ) {
        if (this.values[leftIdx] > this.values[rightIdx]) {
          //swapt with left side
          this.swap(this.values, idx, leftIdx);
          idx = leftIdx;
        } else {
          //swapt with right side
          this.swap(this.values, idx, rightIdx);
          idx = rightIdx;
        }
      } else if (this.values[idx] < this.values[leftIdx]) {
        //swapt with left side
        this.swap(this.values, idx, leftIdx);
        idx = leftIdx;
      } else if (this.values[idx] < this.values[rightIdx]) {
        //swapt with right side
        this.swap(this.values, idx, rightIdx);
        idx = rightIdx;
      } else break;
    }

    return max;
  }

  swap(array, from, to) {
    [array[from], array[to]] = [array[to], array[from]];
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.values);
