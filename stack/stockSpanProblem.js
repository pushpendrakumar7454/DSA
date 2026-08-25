function stockSpanProblem(arr) {
    let st = []
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        while (st.length != 0 && arr[st[st.length - 1]] < arr[i]) {
            st.pop()
        }
        let peakndex = st[st.length - 1]
        if (st.length === 0) ans[i] = i + 1
        else ans[i] = i - peakndex
        st.push(i)
    }
    return ans
}


let arr = [100, 80, 90, 120]
console.log(stockSpanProblem(arr))