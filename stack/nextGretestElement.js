function nextGreaterElement(arr) {
    let st = []
    let ans = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] < arr[i]) {
            st.pop()
        }
        ans[i] = st.length ? st[st.length - 1] : -1
        st.push(arr[i])
    }
    return ans
}

let arr = [1, 2, 3, 4, 5]
console.log(nextGreaterElement(arr))