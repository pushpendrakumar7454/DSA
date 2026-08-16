class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

let list1 = new Node(1)
list1.next = new Node(3)
list1.next.next = new Node(5)

let list2 = new Node(2)
list2.next = new Node(4)
list2.next.next = new Node(6)


function mergeTwolist(list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    if (list1.data < list2.data) {
        list1.next = mergeTwolist(list1.next, list2)
        return list1

    } else {
        list2.next = mergeTwolist(list2.next, list1)
        return list2
    }
}

let result = mergeTwolist(list1, list2)
let curent = result

while (curent != null) {
    process.stdout.write(String(curent.data) + " ")
    curent = curent.next
}