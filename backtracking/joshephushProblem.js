function solve(arr, i, k) {
    if (arr.length == 1) return arr[0]
    let remove = (i + k) % arr.length
    arr.splice(remove, 1)
    return solve(arr, remove, k)
}

function findOfWinner(n, k) {
    let arr = []
    for (let i = 1; i <= n; i++) arr.push(i)
    k = k - 1
    return solve(arr, 0, k)

}

let winner = findOfWinner(5, 2)
console.log(winner)