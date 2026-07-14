let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your number-::"));

let ans = 0;
for (let i = 1; i <= num; i++) {
    if (i * i == num) {
        ans = i;
        break;
    }
    if (i * i > num) {
        ans = i - 1;
        break;
    }
}
console.log(ans);

// function sqrt(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i * i == num) return i;
//         if (i * i > num) return i - 1;
//     }
// }

// console.log(sqrt(num));