class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    BuildTree() {
        this.root = new Node(1)

        this.root.left = new Node(2)
        this.root.right = new Node(3)

        this.root.left.left = new Node(5)
        this.root.left.right = new Node(4)

        this.root.right.left = new Node(6)
        this.root.right.right = new Node(7)
    }

    MaximumDepthofTree(node) {
        if (node === null) return 0

        let leftDepth = this.MaximumDepthofTree(node.left)
        let rightDepth = this.MaximumDepthofTree(node.right)

        return 1 + Math.max(leftDepth, rightDepth)
    }
}

let tree = new Tree()
tree.BuildTree()
console.log(tree.MaximumDepthofTree(tree.root))