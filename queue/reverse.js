class Queue {
    constructor() {
        this.arr = []

    }
    push(val) {

        this.arr.push(val)
    }
    reverse() {
        this.arr.reverse()
    }

}

let qu = new Queue()
qu.push(1)
qu.push(2)
qu.push(3)
qu.push(4)
qu.push(5)
console.log(qu.arr)
qu.reverse()
console.log(qu.arr)