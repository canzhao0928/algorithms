// 98. Validate Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const orderedNums = order(root);
  for (let i = 0; i < orderedNums.length; i++) {
    if (orderedNums[i] >= orderedNums[i + 1]) return false;
  }
  return true;
};

const order = (root) => {
  if (root === null) return [];
  return [...order(root.left), root.val, ...order(root.right)];
};
