let prompt = require("prompt-sync")();

let n= Number(prompt("Enter your num-::"));
let rev=0

function reverse(n){
    if(n==0) return 0;
    rev=rev*10+(n%10)
    return reverse(Math.floor(n/10))

}
reverse(n)

console.log(rev);
