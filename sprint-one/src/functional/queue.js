var Queue = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    tail++;
    storage[tail] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if(count) {
      var result = storage[head];
      delete storage[head];
      head++;
      count--;
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
