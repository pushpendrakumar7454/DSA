class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function invertTree(root) {
    if (root === null) return null

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)
    return root
}

let root = new Node(4)

root.left = new Node(2)
root.right = new Node(7)

root.left.left = new Node(1)
root.left.right = new Node(3)

root.right.left = new Node(6)
root.right.right = new Node(9)

invertTree(root)

console.log(root)