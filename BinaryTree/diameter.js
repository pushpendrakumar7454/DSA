class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function diameterOfTree(root) {
    let ans = 0

    function solve(root) {
        if (root == null) return 0

        let l = solve(root.left)
        let r = solve(root.right)

        ans = Math.max(ans, l + r)

        return Math.max(l, r) + 1
    }

    solve(root)

    console.log(ans)
}

// Tree
let root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)

// Function call
diameterOfTree(root)