// 102. Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let node = [root];
  while (node[0]) {
    let level = node.length;
    let currentLevel = [];
    console.log("the current level length is:" + level);
    for (let i = 0; i < level; i++) {
      console.log(node);
      const newnode = node.shift();
      currentLevel.push(newnode.val);
      if (newnode.left) {
        node.push(newnode.left);
      }
      if (newnode.right) {
        node.push(newnode.right);
      }
    }
    result.push(currentLevel);
    console.log("node length is:" + node.length);
  }
  return result;
};
