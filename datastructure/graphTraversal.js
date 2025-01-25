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

  removeVertex(vertex) {
    //delete the edges first
    //use spread operator to clone the edges into a variable, otherwise
    //the logic does not work due to the passed by reference characteristic
    const connections = [...this.adjacencyList[vertex]];
    connections.forEach(vert => this.removeEdge(vert, vertex));

    //delete the vertex
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    const result = [];
    const visited = {};

    function dfs(vert) {
      if (!vert) return;

      visited[vert] = true;
      result.push(vert);

      this.adjacencyList[vert].forEach(n => {
        if (!visited[n]) dfs.call(this, n);
      });
    }

    dfs.call(this, vertex);

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.adjacencyList);

console.log(g.DFSRecursive('A'));
