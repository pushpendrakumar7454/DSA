function sort(arr) {
    if (arr.length == 0) return
    let a = arr.pop()
    sort(arr)
    placeAtRight(a, arr)
}

function placeAtRight(a, arr) {
    if (arr.length == 0 || arr[arr.length - 1] <= a) {
        arr.push(a)
        return
    }
    let x = arr.pop()
    placeAtRight(a, arr)
    arr.push(x)
}
let arr = [4, 10, 21, 3, 7]
sort(arr)
console.log(arr)