function solve(ans, curr, i, nums) {
    ans.push([...curr])
    while (i < nums.length) {
        curr.push(nums[i])
        solve(ans, curr, i + 1, nums)
        curr.pop()
        let current = nums[i]
        while (i < nums.length && nums[i] === current) i++
    }
}

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b)
    let ans = []
    solve(ans, [], 0, nums)
    return ans

}

console.log(subsetsWithDup([1, 2, 3]))