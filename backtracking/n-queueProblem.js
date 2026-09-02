function isValid(mat, i, j) {
    // Check same column
    let row = i;
    while (row >= 0) {
        if (mat[row][j] === "Q") {
            return false;
        }
        row--;
    }

    // Check upper-left diagonal
    row = i;
    let col = j;

    while (row >= 0 && col >= 0) {
        if (mat[row][col] === "Q") {
            return false;
        }
        row--;
        col--;
    }

    // Check upper-right diagonal
    row = i;
    col = j;

    while (row >= 0 && col < mat[0].length) {
        if (mat[row][col] === "Q") {
            return false;
        }
        row--;
        col++;
    }

    return true;
}


function solve(mat, i, ans) {
    // All queens placed
    if (i === mat.length) {
        let curr = [];

        for (let t = 0; t < mat.length; t++) {
            let s = "";

            for (let r = 0; r < mat[0].length; r++) {
                if (mat[t][r] === "Q") {
                    s += "Q";
                } else {
                    s += ".";
                }
            }

            curr.push(s);
        }

        ans.push(curr);
        return;
    }

    // Try every column
    for (let col = 0; col < mat[0].length; col++) {
        if (isValid(mat, i, col)) {
            // Place queen
            mat[i][col] = "Q";

            // Move to next row
            solve(mat, i + 1, ans);

            // Backtrack
            mat[i][col] = ".";
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