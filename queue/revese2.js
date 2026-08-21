class Queue {
    reverseQueue(qu) {
        let st = []
        while (qu.length != 0) {
            st.push(qu.shift())
        }
        while (st.length != 0) {
            qu.push(st.pop())
        }
    }
}

let queue = new Queue()
let q = [1, 2, 3, 4, 5]
console.log(q)
queue.reverseQueue(q)
console.log(q)