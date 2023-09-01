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
