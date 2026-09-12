class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function search(root, target) {
    if (root === null) {
        return false;
    }

    if (root.val === target) {
        return true;
    }

    return (
        search(root.left, target) ||
        search(root.right, target)
    );
}


// Example
const root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

console.log(search(root, 7));   
console.log(search(root, 100)); 