class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LL {
    constructor() {
        this.next = null
        this.size = 0
    }

    inserAtFirst(val) {
        this.size++
            let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }


    inserAtLast(val) {
        this.size++
            let newNode = new Node(val)

        if (this.head === null) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
    }

    deletedFirst(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            console.log("This is Empty Linked List")
            return
        }

        this.size--
            this.head = this.head.next
    }

    deletedLast(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            console.log("Thi is empty Linked List")
            return
        }
        let temp = this.head
        while (temp.next.next != null) {
            temp = temp.next
        }
        temp.next = null
    }

    inserAtPos(val, pos) {
        this.size++
            let newNode = new Node(val)
        if (pos < 0 && pos > this.size + 1) {
            console.log("Not Posible")
            return
        }
        let temp = this.head
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next
        }
        newNode.next = temp.next
        temp.next = newNode
    }
    deletedPos(pos) {
        if (this.head == null) {
            console.log("This is EMpty Linked LIst")
            return
        }
        if (pos < 0 && pos > this.size + 1) {
            console.log("Not Posible")
            return
        }

        if (pos == 1) {
            this.head = this.head.next
            this.size--
        }
        let temp = this.head
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next
        }

        temp.next = temp.next.next
        this.size--
    }


    printLL(head) {
        if (head === null) {
            console.log("this is Empty Linked List")
            return
        }
        let temp = this.head
        while (temp !== null) {
            process.stdout.write(temp.data + "->")
            temp = temp.next
        }
        console.log("null")

    }
}

let obj = new LL()
obj.inserAtFirst(2)
obj.inserAtFirst(12)
obj.inserAtFirst(23)
obj.inserAtFirst(34)
obj.inserAtFirst(12)
obj.printLL(obj.data)
obj.inserAtLast(100)
obj.inserAtLast(102)
obj.printLL(obj.data)
obj.deletedFirst()
obj.printLL(obj.data)
obj.deletedLast()
obj.printLL(obj.data)
obj.inserAtPos(49, 2)
obj.printLL(obj.data)
obj.deletedPos(2)
obj.printLL(obj.data)