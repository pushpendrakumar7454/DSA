let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your num: "));

if ((num & 1) == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}