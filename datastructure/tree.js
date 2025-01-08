'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const insertNode = new Node(val);

    if (!this.root) {
      this.root = insertNode;
      return this;
    }

    let cur = this.root;
    while (true) {
      if (val === cur.value) return undefined;
      else if (val < cur.value) {
        if (!cur.left) {
          cur.left = insertNode;
          return this;
        } else {
          cur = cur.left;
        }
      } else {
        if (!cur.right) {
          cur.right = insertNode;
          return this;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  contains(val) {
    let cur = this.root;

    while (true) {
      if (cur === null) return false;
      else if (cur.value === val) return true;
      else if (cur.value > val) cur = cur.left;
      else cur = cur.right;
    }
  }

  find(val) {
    let cur = this.root;

    while (true) {
      if (cur === null) return undefined;
      else if (cur.value === val) return cur;
      else if (cur.value > val) cur = cur.left;
      else cur = cur.right;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(bst);
