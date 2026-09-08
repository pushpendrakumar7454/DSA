class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function leftView(root) {
    if (root == null) return

    let maxLevel = -1

    function dfs(root, level) {
        if (root == null) return

        // Level par pehli node
        if (level > maxLevel) {
            console.log(root.val)
            maxLevel = level
        }

        // Pehle left jao
        dfs(root.left, level + 1)

        // Phir right jao
        dfs(root.right, level + 1)
    }

    dfs(root, 0)
}

// Tree
let root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)

root.right.right = new Node(6)

root.left.right.left = new Node(7)

// Left View print
leftView(root)