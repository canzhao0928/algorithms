// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const indices = {};
  nums.forEach((num, index) => {
    indices[num] = index;
  });

  for (index = 0; index < nums.length; index++) {
    const num2 = target - nums[index];
    if (indices[num2] !== index && indices[num2] !== undefined) {
      return [index, indices[num2]];
    }
  }
};
