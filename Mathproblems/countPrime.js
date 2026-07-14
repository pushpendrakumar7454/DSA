let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your num-::"));

let count=0;

for(let i=2;i<=num;i++){
    isPrirme=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isPrirme=false;
            break
        }
    }
    if(isPrirme){
        count++
    }
}

console.log(count);
