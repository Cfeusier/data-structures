var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  //if value is less than this.value
  if(value < this.value) {
    //if this.left is null
    if(this.left === null)  {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if(value > this.value) {
    //if this.left is null
    if(this.right === null)  {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

bstMethods.contains = function(target) {
  // if target is equal to current bst value then return true
  if (target === this.value) {
    return true;
  }
  // if current bst value is greater than target, look left
  if (this.value > target && this.left) {
    return this.left.contains(target);
  }
  // if current bst value is less than target, look right
  if (this.value < target && this.right) {
    return this.right.contains(target);
  }
  return false;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  // if left child exists for current bst
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  // if right child exists for current bst
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert - O(n)
 * contains - O(n)
 * depthFirstLog - O(n)
 */
