let prompt = require("prompt-sync")();
let num = Number(prompt("Enter your num-::"));

function factorial(num){
    if(num==1) return 1;
    return num*factorial(num-1)
}

console.log(factorial(num));
