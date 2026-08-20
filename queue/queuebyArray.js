class Node {
    constructor(val) {
        this.arr = []
        this.size = 0
    }
    enqueue(val) {
        this.size++
            this.arr.push(val)
    }
    dequeue() {
        if (this.arr.length === 0) {
            console.log("Empty Queue")
            return
        }
        this.arr.shift()
        this.size--
    }
}
let Q = new Node()
Q.enqueue(10)
Q.enqueue(20)
Q.enqueue(30)
Q.enqueue(40)
console.log(Q.arr)
Q.dequeue()
console.log(Q.arr)