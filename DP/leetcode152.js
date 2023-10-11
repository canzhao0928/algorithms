// 152. Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProduct = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    let product = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
};

//---------------DP------
var maxProduct = function (nums) {
  let maxP = nums[0];
  let minP = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curmaxP = Math.max(maxP * nums[i], minP * nums[i], nums[i]);
    minP = Math.min(maxP * nums[i], minP * nums[i], nums[i]);
    maxP = curmaxP;
    result = Math.max(maxP, result);
  }
  return result;
};
