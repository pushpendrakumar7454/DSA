class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


// Path Sum III
function pathSum(root, targetSum) {
    let total = 0
    function dfs(root, target) {
        if (root === null) return
        solve(root, target, 0)
        dfs(root.left, target)
        dfs(root.right, target)
    }
    function solve(root, target, curSum) {
        if (root === null) return
        curSum += root.val
        if (curSum === target) {
            total += 1
        }
        solve(root.left, target, curSum)
        solve(root.right, target, curSum)
    }
    dfs(root, targetSum)
    return total
}

// Tree print karne ke liye
function printTree(root) {
    if (root === null) return
    console.log(root.val)
    printTree(root.left)
    printTree(root.right)
}

let root = new Node(10)

root.left = new Node(5)
root.right = new Node(-3)

root.left.left = new Node(3)
root.left.right = new Node(2)

root.right.right = new Node(11)

root.left.left.left = new Node(3)
root.left.left.right = new Node(-2)

root.left.right.right = new Node(1)


// -------------------------
// Tree print
// -------------------------

console.log("Tree values:")

printTree(root)

let targetSum = 8

let answer = pathSum(root, targetSum)

console.log("Target Sum:", targetSum)

console.log("Total Paths:", answer)