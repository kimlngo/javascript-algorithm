'use strict';

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
}

const wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');

wg.addEdge('A', 'B', 10);
wg.addEdge('B', 'C', 7);
wg.addEdge('A', 'C', 12);

console.log(wg.adjacencyList);
