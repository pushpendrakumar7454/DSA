let promt=require('prompt-sync')()

let num=Number(promt("Enter your number-::"))
let result=num;

while(result!==1 && result!==4){
    let sum=0;

    while(result>0){
        let dig=result%10
        sum=sum+(dig*dig)
        result=Math.floor(result/10)
    }
   result=sum;
}

if(result===1) console.log(num," is Happy Number");

else console.log(num, " Is not Happy Number");

