// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = 65536;
  while (left < right) {
    const mid = (right + left) / 2;
    if (Math.abs(mid * mid - x) < 1) return Math.floor(mid);
    else if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }
  }
};
