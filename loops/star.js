const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your num-::"))

for(let i=1;i<=5;i++){
    for(let j=0;j<i;j++){
       process.stdout.write("* ");
    }
    console.log();
}