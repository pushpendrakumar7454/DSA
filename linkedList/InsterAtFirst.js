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