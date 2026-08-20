class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}


class Queue {
    constructor() {
        this.head = null
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            return

        }
        let temp = this.head
        while (temp.next != null) {
            temp = temp.next

        }
        temp.next = newNode
    }

    printQueue() {
        if (this.head === null) {
            console.log("this is  empty linked list")
            return
        }
        let temp = this.head

        while (temp != null) {
            process.stdout.write(temp.data + "->")
            temp = temp.next
        }
        console.log()
    }
    dqueue(val) {
        if (this.head === null) {
            console.log("this is empty Linked List")
            return
        }
        this.head = this.head.next

    }

}


let Q = new Queue()

Q.enqueue(10)
Q.enqueue(20)
Q.enqueue(30)
Q.enqueue(40)
Q.printQueue()
Q.dqueue()
Q.printQueue()