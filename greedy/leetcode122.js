// 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  if (prices.length <= 1) return 0;
  for (let i = 1; i < prices.length; i++) {
    const profitTemp = prices[i] - prices[i - 1];
    if (profitTemp >= 0) {
      profit += profitTemp;
    }
  }
  return profit;
};
