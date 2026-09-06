class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function isSameTree(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

let p = new Node(1)
p.left = new Node(2)
p.right = new Node(3)


let q = new Node(1)
q.left = new Node(2)
q.right = new Node(3)
console.log(isSameTree(p, q))