function minWindow(s, t) {
    let count = {}

    for (let char of t) {
        count[char] = (count[char] || 0) + 1
    }

    let left = 0
    let required = t.length
    let minLength = Infinity
    let start = 0

    for (let right = 0; right < s.length; right++) {
        if (count[s[right]] > 0) {
            required--
        }

        count[s[right]] = (count[s[right]] || 0) - 1

        while (required === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1
                start = left
            }
            count[s[left]]++
            if (count[s[left]] > 0) {
                required++
            }

            left++
        }
    }

    if (minLength === Infinity) {
        return ""
    }

    return s.substring(start, start + minLength)
}


let s = "ADOBECODEBANC"
let t = "ABC"

console.log("Minimum Window:", minWindow(s, t))

