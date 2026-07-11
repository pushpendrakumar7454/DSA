let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your num-::"));

function sum(num) {
    if (num == 0) {
        return 0;
    }

    return num + sum(num - 1);
}

console.log(sum(num));