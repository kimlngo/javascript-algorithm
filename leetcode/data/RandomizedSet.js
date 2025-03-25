'use strict';

class RandomizedSet {
  constructor() {
    this.set = new Set();
  }

  insert(val) {
    if (this.set.has(val)) return false;

    this.set.add(val);
    return true;
  }

  remove(val) {
    if (!this.set.has(val)) return false;

    this.set.delete(val);
    return true;
  }

  getRandom() {
    let result;
    if (this.set.size === 1) {
      for (let n of this.set) {
        result = n;
      }
    } else {
      const randomIdx = Math.trunc(Math.random() * this.set.size);
      let count = 0;

      for (let n of this.set) {
        if (count === randomIdx) {
          result = n;
          break;
        }
        count++;
      }
    }

    return result;
  }
}

const randomSet = new RandomizedSet();

console.log(randomSet.insert(1));
console.log(randomSet.remove(2));
console.log(randomSet.insert(2));

console.log(randomSet.getRandom());
