// 146. LRU Cache
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.LRUCache = new Map();
  this.remain = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.LRUCache.has(key)) return -1;

  //update the using
  const value = this.LRUCache.get(key);
  this.LRUCache.delete(key);
  this.LRUCache.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.LRUCache.delete(key);
  this.LRUCache.set(key, value);

  if (this.LRUCache.size > this.remain) {
    this.LRUCache.delete(this.LRUCache.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
