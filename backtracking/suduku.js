function solveSudoku(mat) {

    function isValid(mat, row, col, ch) {

        // Check row
        for (let j = 0; j < 9; j++) {
            if (mat[row][j] === ch) {
                return false
            }
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (mat[i][col] === ch) {
                return false
            }
        }

        // Check 3 x 3 box
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {

                if (mat[i][j] === ch) {
                    return false
                }
            }
        }

        return true
    }


    function solve(mat, i, j) {

        // All rows completed
        if (i === 9) {
            return true
        }

        let ni
        let nj

        // Move to next row
        if (j === 8) {
            ni = i + 1
            nj = 0
        } else {
            ni = i
            nj = j + 1
        }


        // Already filled cell
        if (mat[i][j] !== ".") {
            return solve(mat, ni, nj)
        }


        // Try 1 to 9
        for (let ch = "1"; ch <= "9"; ch++) {

            if (isValid(mat, i, j, ch)) {

                // Choose
                mat[i][j] = ch

                // Explore
                if (solve(mat, ni, nj)) {
                    return true
                }

                // Backtrack
                mat[i][j] = "."
            }
        }

        return false
    }


    solve(mat, 0, 0)

    return mat
}


// Example
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


solveSudoku(mat)

console.log(mat)