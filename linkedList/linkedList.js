class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    inserAtFirst(val) {
        this.size++;

        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
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
            console.log("empty LInked List")
            return
        }
        this.size--
            this.head = this.head.next
    }
    deletedLast(val) {
        let newNode = new Node(val)

        if (this.head == null) {
            console.log("This  is EMpty Linked List");
            return

        }
        this.size--
            let temp = this.head
        while (temp.next.next !== null) {
            temp = temp.next
        }
        temp.next = null

    }

    inserAtPos(val, pos) {
        this.size++
            let newNode = new Node(val)
        if (pos <= 0 || pos > this.size + 1) {
            console.log("not posible")
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
            console.log("This is EMty Linked List")
            return
        }

        if (pos < 0 && pos > this.size + 1) {

            console.log("Not Posible")
            return
        }

        if (pos === 1) {
            this.head = this.head.next
            this.size--
                return
        }
        let temp = this.head
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next

        }
        temp.next = temp.next.next
        this.size--
    }

    printLL(head) {
        if (head == null) {
            console.log("Empty Linked List");
            return;
        }

        let temp = head;

        while (temp != null) {
            process.stdout.write(temp.data + " -> ");
            temp = temp.next;
        }

        console.log("null");
    }
}

let obj = new LL();

obj.inserAtFirst(65);
obj.inserAtFirst(5);
obj.inserAtFirst(89);
obj.inserAtFirst(6);
obj.inserAtFirst(9);
obj.inserAtFirst(25);
obj.printLL(obj.head);
obj.inserAtLast(100)
obj.inserAtLast(102)
obj.printLL(obj.head);
obj.deletedFirst()
obj.printLL(obj.head);
obj.deletedLast()
obj.printLL(obj.head)
obj.inserAtPos(49, 2)
obj.printLL(obj.head)
obj.deletedPos(2)
obj.printLL(obj.head)