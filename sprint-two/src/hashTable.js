var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];

    // found matching key
    if (tuple[0] === k) {
      // update key with new value
      tuple[1] = v;
      found = true;
      break;
    }
  }

  // no matching key found
  if (!found) {
    bucket.push([k,v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) {
    return null;
  }
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k) {
      bucket.splice(j, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this._count = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert - O(n)
 * retrieve - O(n)
 * remove - O(n)
 */
