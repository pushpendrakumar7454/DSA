function solve(ans, curr, i, digits, map) {
    if (i === digits.length) {
        ans.push(curr)
        return
    }
    let temp = map.get(digits.charAt(i))
    for (let j = 0; j < temp.length; j++) {
        solve(ans, curr + temp.charAt(j), i + 1, digits, map)
    }
}


function letterCombination(digits) {
    let map = new Map()
    map.set("2", "abc")
    map.set("3", "def")
    map.set("4", "ghi")
    map.set("5", "jkl")
    map.set("6", "mno")
    map.set("7", "pqrs")
    map.set("8", "tuv")
    map.set("9", "wxyz")
    let ans = []
    solve(ans, "", 0, digits, map)
    return ans
}

console.log(letterCombination("23"))