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