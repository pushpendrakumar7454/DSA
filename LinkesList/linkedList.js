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

    insertedFisrt(val) {
        this.size++;

        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    printLL(head) {
        if (head === null) {
            console.log("Empty Linked List");
            return;
        }

        let temp = head;
        let ans = "";

        while (temp !== null) {
            ans += temp.data + " -> ";
            temp = temp.next;
        }

        ans += "null";
        console.log(ans);
    }
}

let obj = new LL();

obj.insertedFisrt(89);
obj.insertedFisrt(99);
obj.insertedFisrt(19);
obj.insertedFisrt(0);
obj.insertedFisrt(9);

obj.printLL(obj.head);