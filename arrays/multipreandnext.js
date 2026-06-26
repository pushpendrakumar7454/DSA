let arr = [2, 3, 4, 5, 6];
let ans = [];

let n = arr.length;
ans[0] = arr[0] * arr[1];
for (let i = 1; i < n - 1; i++) {
    ans[i] = arr[i - 1] * arr[i + 1];
}
ans[n - 1] = arr[n - 2] * arr[n - 1];
console.log(ans);
