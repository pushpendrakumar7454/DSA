const prompt = require("prompt-sync")();

let num=Number(prompt(("Enter your number-::")))
let sum=0

for(let i=0;i<=num;i++){
    sum=sum+i;
}
console.log(sum);
