const prompt = require("prompt-sync")();

let num=Number(prompt(("Enter your number-::")))

let fact=1;

for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);
