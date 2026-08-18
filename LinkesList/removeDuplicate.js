class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = new Node(2)
head.next = new Node(3)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


function remeveDuplicate(head) {
    let current = head

    while (current != null && current.next != null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
}
let result = remeveDuplicate(head)
console.log(result)