class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function solve(root, p, q) {

    if (root === null) {
        return null
    }
    if (root.val === p || root.val === q) {
        return root
    }

    let left = solve(root.left, p, q)
    let right = solve(root.right, p, q)
    if (left === null) {
        return right
    }
    if (right === null) {
        return left
    }


    return root
}


// Create Tree
let root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)

root.right.left = new Node(6)
root.right.right = new Node(7)


// Find LCA
let p = 4
let q = 5

let result = solve(root, p, q)


// Print LCA
console.log("LCA of", p, "and", q, "is:", result.val)