var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.head = 1;
  someInstance.tail = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.tail++;
    this.storage[this.tail] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count) {
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
