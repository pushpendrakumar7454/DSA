class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(2)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(3)
head.next.next.next.next.next = new Node(4)


function removeDuplicate(head) {
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


function printList(head) {
    let current = head
    while (current != null) {
        console.log(current.val)
        current = current.next
    }
}

let result = removeDuplicate(head)
printList(result)