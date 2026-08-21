class Stack {
    constructor() {
        this.arr = []
    }
    push(val) {
        this.arr.push(val)
    }
    reverse() {
        if (this.arr.length === 0) {
            console.log("empty stack")
            return
        }
        this.arr.reverse()
    }

}

let st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.push(50)
console.log(st.arr)
st.reverse()
console.log(st.arr)