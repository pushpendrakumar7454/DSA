let promt=require('prompt-sync')()

let num=Number(promt("Enter your number-::"))
let ans=0;
let count=0;

while(num>0){
    let decimal=num%10
    ans=ans+(decimal*Math.pow(2,count))
    num=Math.floor(num/10)
    count++
}

console.log(ans);
