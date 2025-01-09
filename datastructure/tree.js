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

  breathFirstSearch_1() {
    if (!this.root) return [];

    let queue = [];
    queue.push(this.root);
    let index = 0;
    while (index < queue.length) {
      if (queue[index].left) queue.push(queue[index].left);

      if (queue[index].right) queue.push(queue[index].right);

      index++;
    }

    return queue.map(node => node.value);
  }

  breathFirstSearch_2() {
    if (!this.root) return [];

    const queue = [this.root];
    const visited = [];
    let node = undefined;

    while (queue.length !== 0) {
      node = queue.shift();
      visited.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited.map(node => node.value);
  }

  depthFirstSearch_PreOrder() {
    if (!this.root) return undefined;

    const visited = [];

    const traverse = function (node) {
      visited.push(node);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return visited.map(node => node.value).join(', ');
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
console.log('breathFirstSearch - 1');
console.log(bst.breathFirstSearch_1());

console.log('breathFirstSearch - 2');
console.log(bst.breathFirstSearch_2());

console.log('depthFirstSearch - pre-order');
console.log(bst.depthFirstSearch_PreOrder());
