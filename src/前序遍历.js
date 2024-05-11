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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = []
  const dfs = (rootNode) => {
      if(rootNode===null) return
      result.push(rootNode.val)
      dfs(rootNode.left)
      dfs(rootNode.right)
  }
  dfs(root)
  return result

};

