const prompt = require("prompt-sync")();

let num=Number(prompt(("Enter your number-::")))
let result=""
for(let i=0;i<=num;i++){
    if(num%i==0){
        result=result+i+" ";
        
    }
}
console.log(result);
