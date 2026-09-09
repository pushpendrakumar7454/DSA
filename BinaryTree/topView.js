class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


class Pair {
    constructor(ele, level) {
        this.ele = ele
        this.level = level
    }
}

class Solution {
    solve(root, hd, level, map) {
        if (root === null) return

        if (!map.has(hd) || level < map.get(hd).level) {
            map.set(hd, new Pair(root.data, level))
        }
        this.solve(root.left, hd - 1, level + 1, map)
        this.solve(root.right, hd + 1, level + 1, map)
    }
    topView(root) {
        let ans = []
        if (root === null) return ans
        let map = new Map()
        this.solve(root, 0, 0, map)
        let sortedKey = [...map.keys()].sort((a, b) => a - b)
        for (let i = 0; i < sortedKey.length; i++) {
            ans.push(map.get(sortedKey[i]).ele)
        }
        return ans
    }
}
// Create Tree
let root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.left.right = new Node(5)

root.right.left = new Node(6)
root.right.right = new Node(7)


// Solution
let obj = new Solution()

let result = obj.topView(root)


// Print Top View
console.log("Top View:", result)