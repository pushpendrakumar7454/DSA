class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function hasPathSum(root, targetSum) {
    if (root === null) return false
    if (root.left === null && root.right === null) {
        return root.val === targetSum
    }

    let remainingSum = targetSum - root.val
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
}

let root = new Node(5)

root.left = new Node(4)
root.right = new Node(8)

root.left.left = new Node(11)

root.left.left.left = new Node(7)
root.left.left.right = new Node(2)

root.right.left = new Node(13)
root.right.right = new Node(4)

console.log(hasPathSum(root, 22))