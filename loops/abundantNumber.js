const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your number-::"))
let digit=0;
for(let i=0;i<=num;i++){
    if(num%i==0){
      digit=digit+i
    }
}
if(digit>num) console.log("Abundant Number");    
else  console.log("Not Abundant Number");
    
