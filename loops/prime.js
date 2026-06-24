const prompt = require("prompt-sync")();

let num=Number(prompt(("Enter your number-::")))
let isprime=true


if(num<=1){
    isprime=false
}
for(let i=2;i<Math.sqrt(num);i++){
    if(num%i==0){
        isprime=false
        break;
    }
}
if(isprime){
    console.log(`${num} is prime number`);
    
}else{
    console.log(`${num} is not prime number`);
}