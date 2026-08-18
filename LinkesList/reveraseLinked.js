class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


function reverseList(head) {
    let current = head
    let prev = null

    while (current != null) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev
}



function printList(head) {
    let current = head
    let result = ""
    while (current != null) {
        result += current.val
        if (current.next != null) {
            result += "->"
        }
        current = current.next
    }
    console.log(result)
}

let reverseHead = reverseList(head)
printList(reverseHead)