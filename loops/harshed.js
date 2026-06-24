const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your number-::"))
let temp=num;
let sum=0;

while(num>0){
    let dig=num%10
    sum=sum+dig
    num=Math.floor(num/10)
}
if(temp%sum==0) console.log("Harshed number");
else console.log("Not harshed Number");


