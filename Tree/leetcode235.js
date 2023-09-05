// 235. Lowest Common Ancestor of a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   const array = order(root);
//   let rootIndex = array.indexOf(root.val);
//   let pIndex = array.indexOf(p.val);
//   let qIndex = array.indexOf(q.val);
//   console.log(rootIndex, pIndex, qIndex);
//   while (rootIndex !== pIndex || rootIndex !== qIndex) {
//     if (
//       (rootIndex >= pIndex && rootIndex <= qIndex) ||
//       (rootIndex <= pIndex && rootIndex >= qIndex)
//     ) {
//       return root;
//     } else if (rootIndex > pIndex && rootIndex > qIndex) {
//       root = root.left;
//     } else if (rootIndex < pIndex && rootIndex < qIndex) {
//       root = root.right;
//     }
//     // console.log(root)
//     rootIndex = array.indexOf(root.val);
//   }
//   if (rootIndex === pIndex) return p;
//   if (rootIndex === qIndex) return q;
// };

// const order = (root) => {
//   if (root === null) return [];
//   return [...order(root.left), root.val, ...order(root.right)];
// };

var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};
