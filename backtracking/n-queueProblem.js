function isValid(mat, i = 2, j = 2) {
    let row = i
    let col = j;
    while (row >= 0) {
        if (mat[row][col] === "Q") return false
        row--
    }
    row = i;
    col = j
    while (row >= 0 && col >= 0) {
        if (mat[row][col] === "Q") return false
        row--;
        col--
    }
    row = i;
    col = j;
    while (row >= 0 && col <= mat[0].length) {
        if (mat[row][col] === "Q") return false
        row--;
        col++

    }
    return true


}




function solve(mat, i, j, ans) {
    if (i === mat.length) {
        let curr = []
        for (let t = 0; t < mat.length; t++) {
            let s = ""
            for (let r = 0; r < mat[0].length; r++) {
                if (mat[t][r === 'Q']) s += "Q"
                else s + "."
            }
            curr.push(s)
        }
        ans.push(curr)
    }
    for (let col = 0; col < n; col++) {
        if (isValid(mat, i, col)) {
            mat[i][col] = "Q"
            solve(mat, i + 1)
            mat[i][col]
        }
    }
    return col

}