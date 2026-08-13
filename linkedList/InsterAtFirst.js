class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}
class LL {
    constructor() {
        this.head = null
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

        if (this.head === null) {
            console.log("This is EMpty Linked LIst")
            return
        }
        this.size--
            this.head = this.head.next


    }


    deletedLast(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            console.log("this is EMpty Linked List")
            return
        }
        this.size--
            let temp = this.head
        while (temp.next.next != null) {
            temp = temp.next
        }
        temp.next = null
    }




    printLL(head) {
        if (head === null) {
            console.log("EMpty linked listt")
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
obj.inserAtFirst(62)
obj.inserAtFirst(2)
obj.inserAtFirst(25)
obj.inserAtFirst(6)
obj.inserAtFirst(72)
obj.printLL(obj.head)
obj.inserAtLast(100)
obj.inserAtLast(102)
obj.printLL(obj.head)
obj.deletedFirst()
obj.printLL(obj.head)
obj.deletedLast()
obj.printLL(obj.head)