class Solution {
  constructor() {
    this.root = null;
  }

  helper(root, min, max) {
    if (root === null) return true;

    if (
      (max !== null && root.val >= max) ||
      (min !== null && root.val <= min)
    ) {
      return false;
    }

    return (
      this.helper(root.left, min, root.val) &&
      this.helper(root.right, root.val, max)
    );
  }

  isValidBST(root) {
    return this.helper(root, null, null);
  }
}


// Tree Node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


// Example BST
const root = new TreeNode(5);

root.left = new TreeNode(3);
root.right = new TreeNode(7);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);


// Solution
const solution = new Solution();

const result = solution.isValidBST(root);

console.log("Is Valid BST:", result);