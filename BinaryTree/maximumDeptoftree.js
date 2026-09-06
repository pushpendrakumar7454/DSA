class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}


class Tree {
    constructor() {
        this.root = null
    }
    buildTree() {
        this.root = new Node(1)
        this.root.left = new Node(2)
        this.root.right = new Node(3)
        this.root.left.right = new Node(4)
        this.root.left.left = new Node(5)
        this.root.left.right = new Node(6)
        this.root.right.right = new Node(7)
    }
    maximumdeftOfTree(node) {
        if (node === null) return 0
        let left = this.maximumdeftOfTree(node.left)
        let right = this.maximumdeftOfTree(node.right)
        return 1 + Math.max(left, right)
    }
}

let tree = new Tree()
tree.buildTree()
console.log(tree.maximumdeftOfTree(tree.root))