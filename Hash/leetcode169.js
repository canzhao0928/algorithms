// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.length / 2;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else hash[nums[i]]++;
    if (hash[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
