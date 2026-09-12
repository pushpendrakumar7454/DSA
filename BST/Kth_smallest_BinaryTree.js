class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function kthSmallest(root, k) {
    let count = 0;
    function inorder(node) {
        if (node === null) return null;
        const left = inorder(node.left);
        if (left !== null) {
            return left;
        }
        count++;

        if (count === k) {
            return node.val;
        }
        return inorder(node.right);
    }
    return inorder(root);
}


// Create BST
const root = new TreeNode(5);

root.left = new TreeNode(3);
root.right = new TreeNode(7);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);


// Find kth smallest
const k = 3;

const result = kthSmallest(root, k);

console.log(`${k}th smallest element:`, result);