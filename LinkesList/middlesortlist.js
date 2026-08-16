class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}
let head = new Node(20)
head.next = new Node(23)
head.next.next = new Node(10)
head.next.next.next = new Node(17)
head.next.next.next.next = new Node(34)


function findMiddle(head) {
    let slow = head
    let fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

let middle = findMiddle(head)
console.log(middle.data)