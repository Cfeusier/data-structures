var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, root){
  root = root || this;
  if(root.value === target) {
    return true;
  }
  for (var i = 0; i < root.children.length; i++) {
    if(this.contains(target, root.children[i])) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild - O(1) if not considering _.extend as part of time complexity considerations
 *          - O(n) if considering _.extend
 * contains - O(n^n)
 */
