//优先队列

/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function (k, nums) {
//   this.nums = nums;
//   this.k = k;
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   this.nums.push(val);
//   this.nums.sort((a, b) => b - a);
//   return this.nums[this.k - 1];
// };

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var KthLargest = function (k, nums) {
  this.nums = nums.sort((a, b) => b - a).slice(0, k);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (val > this.nums[this.k - 1]) {
    this.nums.pop();
    this.nums.push(val);
    this.nums = this.nums.sort((a, b) => b - a);
  } else if (this.nums.length < this.k) {
    this.nums.push(val);
    this.nums = this.nums.sort((a, b) => b - a);
  }

  return this.nums[this.k - 1];
};
