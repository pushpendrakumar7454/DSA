let prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b=Number(prompt("ENter second number-::"))


//Brute Force Approach
let ans=0;
let min=Math.min(a,b)
for(let i=min;i>=1;i--){
    if(a%i==0 && b%i==0){
        ans=i;
        break
    }
}

console.log(ans);
