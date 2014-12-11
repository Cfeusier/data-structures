var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count : 0
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    if (this.count) {
      var result = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return result;
    }
  },
  size: function() {
    return this.count;
  }
};
// TODO: place stackMethods as property on Stack
