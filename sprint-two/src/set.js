var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  return !this._storage[item] ? false : true;
};

setPrototype.remove = function(item){
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  add O(1)
 *  contains O(1)
 *  remove O(1)
 */
