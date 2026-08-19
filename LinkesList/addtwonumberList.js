class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let l1 = new Node(2)
l1.next = new Node(3)
l1.next.next = new Node(6)
let l2 = new Node(1)
l2.next = new Node(4)
l2.next.next = new Node(7)


let addtwonumber = function(l1, l2) {
    let dummy = new Node(0)
    let curr = dummy
    let curry = 0
    while (li != null && l2 != null && curry !== 0) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0

        let sum = val1 + val2 + curry
        curry = Math.floor(sum / 10)
        curry.next = new Node(sum % 10)
        curr = curr.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next

    }
    return dummy.next

}