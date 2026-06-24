const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your num-::"))
let sq=num*num;
let sum=0;
let temp=num

while(sq>0){
    let dig=sq%10
    sum=sum+dig
    sq=Math.floor(sq/10)

}
if(num===temp) console.log("Neon Number");
else console.log("not neon Number");

