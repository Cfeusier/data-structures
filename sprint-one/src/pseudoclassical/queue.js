var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.head = 1;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.tail++;
  this.storage[this.tail] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  if(this.count) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.count--;
    return result;
  }
};
Queue.prototype.size = function() {
  return this.count;
};
