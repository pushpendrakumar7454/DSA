function solve(ans, curr, i, nums) {
    if (i === nums.length) {
        ans.push([...curr])
        return
    }
    curr.push(nums[i])
    solve(ans, curr, i + 1, nums)
    curr.pop()
    solve(ans, curr, i + 1, nums)
}


function powerSet(nums) {
    let ans = []
    solve(ans, [], 0, nums)
    return ans
}


let power = powerSet([1, 2, 3])
console.log(power)