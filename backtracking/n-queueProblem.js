function isValid(mat, i, j) {
    let row = i
    while (row >= 0) {
        if (mat[row][j] == "Q") {
            return false
        }
        row--
    }

    row = i
    let col = j
    while (row >= 0 && col >= 0) {
        if (mat[row][col] == "Q") {
            return false
        }
        row--
        col--
    }
    row = i
    col = j
    while (row >= 0 && col < mat[0].length) {
        if (mat[row][col] === "Q") {
            return false
        }
        row--
        col++
    }
    return true
}


function solve(mat, i, ans) {
    if (i === mat.length) {
        let curr = []
        for (let t = 0; t < mat.length; t++) {
            let s = ""
            for (let r = 0; r < mat[0].length; r++) {
                if (mat[t][r] == "Q") {
                    s += 'Q'
                } else {
                    s += "."
                }
            }
            curr.push(s)
        }
        ans.push(curr)
        return
    }
    for (let col = 0; col < mat[0].length; col++) {
        if (isValid(mat, i, col)) {
            mat[i][col] = "Q"
            solve(mat, i + 1, ans)
            mat[i][col] = "."
        }
    }
}


function nQueens(n) {
    let mat = Array.from({ length: n },
        () => Array(n).fill(".")
    );

    let ans = [];

    solve(mat, 0, ans);

    return ans;
}


console.log(nQueens(4));