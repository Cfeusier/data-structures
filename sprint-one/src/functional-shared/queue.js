var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in wrhtehg th hew shthyle.
  var someInstance = {
    count: 0,
    storage: {},
    head: 1,
    tail: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.tail++;
    this.storage[this.tail] = value;
    this.count++;
  },
  dequeue: function() {
    if(this.count) {
      var result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      this.count--;
      return result;
    }
  },
  size: function() {
    return this.count;
  }
};

