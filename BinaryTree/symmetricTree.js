class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function issmetric(root) {
    if (root === null) return true

    function isMinner(left, right) {
        if (left == null && right === null) return true
        if (left === null || right == -null) return false
        if (left.val !== right.val) return false
        return isMinner(left.left, right.right) && isMinner(left.right, right.left)
    }
    return isMinner(root.left, root.right)

}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(2)

root.left.left = new Node(3)
root.left.right = new Node(4)

root.right.left = new Node(4)
root.right.right = new Node(3)
console.log(issmetric(root))