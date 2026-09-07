class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function isSymmetric(root) {
    if (root === null) return true

    function isMinor(left, right) {
        if (left === null && right === null) return true
        if (left === null || right === null) return false
        if (left.val !== right.val) return false
        return isMinor(left.left, right.right) && isMinor(left.right, right.left)
    }
    return isMinor(root.left, root.right)
}


let root = new Node(1)

root.left = new Node(2)
root.right = new Node(2)


root.left.left = new Node(3)
root.left.right = new Node(4)

root.right.left = new Node(4)
root.right.right = new Node(3)

console.log(isSymmetric(root))