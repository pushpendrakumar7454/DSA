class Queue {
    reverseQueue(q) {
        let st = []
        while (q.length != 0) {
            st.push(q.shift())
        }
        while (st.length != 0) {
            q.push(st.pop())
        }
    }
}

let q = new Queue()
let qe = [1, 2, 3, 4, 5]
console.log(qe)
q.reverseQueue(qe)
console.log(qe)