class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next = head.next



function cycleSort(head) {
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            return true
        }

    }
    return false
}

console.log(cycleSort(head))