var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  if(this.contains(node)) {
    delete this.nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var key in this.edges) {
    if((this.edges[key][0] === fromNode && this.edges[key][1] === toNode) || (this.edges[key][1] === fromNode && this.edges[key][0] === toNode)) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = [fromNode, toNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode, toNode)) {
    delete this.edges[fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode - O(1)
 * contains - O(1)
 * removeNode - O(1)
 * hasEdge - O(n)
 * addEdge - O(1)
 * removeEdge - O(n)
 * forEachNode - O(n)
 *
 */

