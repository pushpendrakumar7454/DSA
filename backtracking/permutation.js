function solve(ans, curr, isVis, i, nums) {
    if (i == nums.length) {
        ans.pudh([...curr])
        return
    }
    for (let j = 0; j < nums.length; j++) {
        if (!isVis[j]) {
            curr.push(nums[j])
            isVis[j] = true
            solve(ans, curr, isVis, i + 1, nums)
            curr.pop()
            isVis[j] = false

        }
    }
}



function purmute(nums) {
    let ans = []
    solve(ans, [], [], 0, nums)
    return ans
}