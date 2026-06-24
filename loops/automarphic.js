const prompt = require('prompt-sync')();

let num = Number(prompt("Enter your num-:: "));

let square = num * num;
let temp = num;
let dig = 0;

while (temp > 0) {
    dig++;
    temp = Math.floor(temp / 10);
}

let lastDigits = square % (10 ** dig);

if (lastDigits === num) {
    console.log(`${num} is an Automorphic Number`);
} else {
    console.log(`${num} is not an Automorphic Number`);
}