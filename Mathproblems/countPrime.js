let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your num-::"));

let count=0;

for(let i=2;i<=num;i++){
    let isPrime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isPrime=false
            break

        }
    }
    if(isPrime){
        count++
    }
}
console.log(count);
