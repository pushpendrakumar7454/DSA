class Stack {
    reverseStack(st) {
        let q = []
        while (st.length != 0) {
            q.push(st.pop())
        }
        while (q.length != 0) {
            st.push(q.shift())
        }
    }
}

let stack = new Stack()
let st = [1, 2, 3, 4, 5]
console.log(st)
stack.reverseStack(st)
console.log(st)