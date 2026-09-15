function latgestSubArrayOfK(arr, k) {
    let sum = 0
    let maxlength = 0
    let i = 0
    let j = 0

    while (j < arr.length) {
        sum += arr[j]

        while (sum > k) {
            sum -= arr[i]
            i++
        }

        if (sum === k) {
            maxlength = Math.max(maxlength, j - i + 1)
        }

        j++
    }

    return maxlength
}

console.log(latgestSubArrayOfK([1, 2, 3, 1, 1, 1], 3))