const prompt = require("prompt-sync")();
let num=Number(prompt("Enter your number-::"))

let sumEven=0;
let sumOdd=0;

for(let i=0;i<=num;i++){
    if(i%2===0){
        sumEven=sumEven+i;
        
    }else{
        sumOdd=sumOdd+i;
    }
}
console.log(sumEven);
console.log(sumOdd);

