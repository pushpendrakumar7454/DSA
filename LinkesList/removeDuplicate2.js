class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(2)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)


function duplicateRemove(head) {
    let dummy = new Node(0)
    dummy.next = head
    let prev = dummy
    let current = head
    while (current != null) {
        let flag = false
        while (current.next != null && current.val == current.next.val) {
            flag = true
            current = current.next
        }
        if (flag) {
            prev.next = current.next
        } else {
            prev = prev.next
        }
        current = current.next
    }
    return dummy.next
}

function printList(head) {
    let current = head
    while (current != null) {
        console.log(current.val)
        current = current.next
    }
}
let result = duplicateRemove(head)
printList(result)