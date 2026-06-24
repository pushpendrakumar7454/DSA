const promt=require("prompt-sync")()

let num=Number(promt('Enter your number-::'))
let temp=num;
let rev=0

while(num>0){
    let dig=num%10
    let fact=1;
    for(let i=1;i<=dig;i++){
        fact=fact*i
    }
    rev=rev+fact
    num=Math.floor(num/10)
}
if(temp===rev) console.log("isStrong number");
else console.log("Not strong number");

