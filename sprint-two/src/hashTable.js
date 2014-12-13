var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  if(!this._storage.get(i)) {
    var firstBucket = [obj];
    this._storage.set(i, firstBucket);
  } else {
    this._storage.get(i).push(obj);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][k]) {
      return bucket[j][k];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][k]) {
      bucket.splice(j, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert - O(n)
 * retrieve - O(n)
 * remove - O(n)
 */
