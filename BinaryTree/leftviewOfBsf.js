class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function leftView(root) {
    if (root == null) return

    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        for (let i = 0; i < size; i++) {
            let node = queue.shift()

            if (i === 0) {
                console.log(node.val)
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
}

let root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)

root.right.right = new Node(6)

root.left.right.left = new Node(7)

// Left View print
leftView(root)