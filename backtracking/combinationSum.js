function solve(ans, curr, i, nums, t) {

    // target mil gaya
    if (t === 0) {
        ans.push([...curr])
        return
    }

    // array khatam
    if (i === nums.length) {
        return
    }

    // take
    if (nums[i] <= t) {
        curr.push(nums[i])

        // i same rahega
        // kyunki same number dobara le sakte hain
        solve(ans, curr, i, nums, t - nums[i])

        curr.pop()
    }

    // skip
    solve(ans, curr, i + 1, nums, t)
}


function combinationSum(nums, target) {

    let ans = []

    solve(ans, [], 0, nums, target)

    return ans
}


console.log(combinationSum([2, 3, 6, 7], 7))