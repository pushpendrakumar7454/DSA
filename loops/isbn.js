const promt=require('prompt-sync')()

let num=Number(promt("Enter your number-::"))
let temp=num;
let count=0;

while(num>0){
    count++
    num=Math.floor(num/10)
}
if(count!==10){
    console.log('Not ISBN Number');
    
}else{
    let ans=0;
    let isbn=1
    while(temp>0){
        let dig=temp%10
        ans=ans+(dig*isbn)
        isbn++
        temp=Math.floor(temp/10)
    }
    if(ans%11==0) console.log("ISBN Number");
    else console.log("Not isbn number");
    
    
}