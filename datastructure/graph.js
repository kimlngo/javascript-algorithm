'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
  }

  removeVertex(deletedVertex) {
    console.log(this.adjacencyList[deletedVertex]);
    for (let node of this.adjacencyList[deletedVertex]) {
      console.log(node);
      this.removeEdge(deletedVertex, node);
    }
    // this.adjacencyList[deletedVertex].forEach(edge =>
    //   this.removeEdge(deletedVertex, edge)
    // );
    delete this.adjacencyList[deletedVertex];
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Hong Kong');

g.addEdge('Dallas', 'Aspen');
g.addEdge('Dallas', 'Hong Kong');
g.addEdge('Dallas', 'Los Angeles');

g.addEdge('Hong Kong', 'Los Angeles');
console.log(g.adjacencyList);
