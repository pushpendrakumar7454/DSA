class Queue {
    constructor(size) {
        this.size = size
        this.arr = new Array(size)
        this.front = -1
        this.rear = -1
    }

    enqueue(val) {
        if ((this.rear + 1) % this.size == this.front) {
            console.log("full queue")
            return
        }

        if (this.front == -1) {
            this.front = 0
        }

        this.rear = (this.rear + 1) % this.size

        this.arr[this.rear] = val
    }
}

let q = new Queue(5)

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

console.log(q.arr)
q.enqueue(30)