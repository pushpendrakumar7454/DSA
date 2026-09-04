function solve(ans, curr, i, nums, t) {
    if (t === 0) {
        ans.push([...curr])
        return
    }
    if (i === nums.length) {
        return
    }

    if (nums[i] <= t) {
        curr.push(nums[i])
        solve(ans, curr, i, nums, t - nums[i])
        curr.pop()
    }
    solve(ans, curr, i + 1, nums, t)
}

function combinationSum(nums, target) {

    let ans = []

    solve(ans, [], 0, nums, target)

    return ans
}


console.log(combinationSum([2, 3, 6, 7], 7))