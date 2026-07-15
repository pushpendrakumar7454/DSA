let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your number: "));

for (let i = 1; i<= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}
