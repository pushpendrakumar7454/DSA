
let prompt = require("prompt-sync")();

let n= Number(prompt("Enter your num-::"));

function sumofDigit(n){{
    if(n===0) return 0;
    return n%10+sumofDigit(Math.floor(n/10))
}}

console.log(sumofDigit(n));

