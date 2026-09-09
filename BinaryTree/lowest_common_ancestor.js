class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


// LCA Function
function solve(root, p, q) {

    // Base case
    if (root === null) {
        return null
    }

    // Agar current node p ya q hai
    if (root.val === p || root.val === q) {
        return root
    }

    // Left subtree
    let left = solve(root.left, p, q)

    // Right subtree
    let right = solve(root.right, p, q)

    // Agar left mein kuch nahi mila
    if (left === null) {
        return right
    }

    // Agar right mein kuch nahi mila
    if (right === null) {
        return left
    }

    // Dono side p aur q mile
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