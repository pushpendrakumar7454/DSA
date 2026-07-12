let prompt = require("prompt-sync")();

let n= Number(prompt("Enter your num-::"));

function fibo(n,first=0,second=1){
    if(n===0) return
    console.log(first);
    
    let third=first+second
    fibo(n-1,second,third)

}

fibo(n)
