let promt=require('prompt-sync')()

let num=Number(promt('Enter your num-::'))
let ans=""

while(num>0){
    let bit=num%2
    ans=bit+ans
    num=Math.floor(num/2)
}
console.log(ans);
