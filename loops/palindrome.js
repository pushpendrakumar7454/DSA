const promt=require('prompt-sync')()
let num=Number(promt("Enter your num-::"))
let temp=num;
let rev=0;

while(num>0){
    let dig=num%10
    rev=rev*10+dig
    num=Math.floor(num/10)
}
if(temp===rev) console.log("palindrome number");
else console.log("Not Palindrome number");

