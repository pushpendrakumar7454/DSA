function solve(mat, i, j) {
    if (i == mat.length) return true

    let ni = 0;
    let nj = 0;
    if (j == mat[0].length - 1) {
        ni = i + 1
        nj = 0
    } else {
        ni = i
        nj = j + 1
    }
    if (mat[i][j] !== ".") {
        if (solve(mat, ni, nj)) return true
    } else {
        for (let ch = 0; ch <= 9; ch++) {
            if (isValid(mat, i, j, ch)) {
                mat[i][j] = ch
                if (solve(mat, ni, nj)) return true
            }

            mat[i][j] = "."
        }
    }
    return false
}

function isValid(mat, i, j, ch) {
    for (let k = 0; k < 9; k++) {
        if (mat[i][k] == ch) return false
        if (mat[k][j] == ch) return false
    }

    let row = Math.floor(i / 3) * 3
    let column = Math.floor(j / 3) * 3
    for (let r = row; r < row + 3; r++) {
        for (let c = column; c < column + 3; c++) {
            if (mat[r][c] == ch) return false
        }
    }
    return true
}

// Sudoku
let mat = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]


if (solve(mat, 0, 0)) {
    console.log(mat)
} else {
    console.log("No solution")
}