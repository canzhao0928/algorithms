// 22. Generate Parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const gen = (left, right, n, parentheses, result) => {
    if (left === n && right === n) {
      result.push(parentheses);
      return;
    }
    if (left < n) {
      gen(left + 1, right, n, parentheses + "(", result);
    }
    if (right < n && left > right) {
      gen(left, right + 1, n, parentheses + ")", result);
    }
  };
  let result = [];
  gen(0, 0, n, "", result);
  return result;
};
