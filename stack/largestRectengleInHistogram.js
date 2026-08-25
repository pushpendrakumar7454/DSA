function largestRectangleInHistogram(arr) {
    let st = []
    let maxArea = 0

    for (let i = 0; i <= arr.length; i++) {

        let currentHeight = i === arr.length ? 0 : arr[i]

        while (st.length && arr[st[st.length - 1]] > currentHeight) {

            let height = arr[st.pop()]

            let width = st.length ?
                i - st[st.length - 1] - 1 :
                i

            let area = height * width

            maxArea = Math.max(maxArea, area)
        }

        st.push(i)
    }

    return maxArea
}

let arr = [2, 1, 5, 6, 2, 3]

console.log(largestRectangleInHistogram(arr))