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

    buildTree() {
        this.root = new Node(1)

        this.root.left = new Node(2)
        this.root.right = new Node(3)

        this.root.left.left = new Node(4)
        this.root.left.right = new Node(5)

        this.root.right.left = new Node(6)
        this.root.right.right = new Node(7)
    }

    inorder(node, ans = []) {
        if (node === null) {
            return ans
        }

        this.inorder(node.left, ans)
        ans.push(node.val)
        this.inorder(node.right, ans)

        return ans
    }

    preorder(node, ans = []) {
        if (node === null) {
            return ans
        }

        ans.push(node.val)
        this.preorder(node.left, ans)
        this.preorder(node.right, ans)

        return ans
    }

    postorder(node, ans = []) {
        if (node === null) {
            return ans
        }

        this.postorder(node.left, ans)
        this.postorder(node.right, ans)
        ans.push(node.val)

        return ans
    }
}

const tree = new Tree()

tree.buildTree()

console.log("Inorder:", tree.inorder(tree.root).join(" "))
console.log("Preorder:", tree.preorder(tree.root).join(" "))
console.log("Postorder:", tree.postorder(tree.root).join(" "))