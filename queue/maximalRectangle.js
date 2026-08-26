function maximalRectangle(matrix) {
    let cols = matrix[0].length
    let heights = new Array(cols).fill(0)
    let maxArea = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == "1") {
                heights[j]++
            } else {
                heights[j] = 0
            }
        }
        let stack = [-1]
        for (let j = 0; j <= cols; j++) {
            let currentHeight = j === cols ? 0 : heights[j]
            while (stack.length > 1 && heights[stack[stack.length - 1]] > currentHeight) {
                let height = heights[stack.pop()]
                let width = j - stack[stack.length - 1] - 1
                let area = height * width
                maxArea = Math.max(maxArea, area)

            }
            stack.push(j)
        }
    }
    return maxArea
}
let matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

console.log(maximalRectangle(matrix));