const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your num-::"))

for(let i=1;i<=num;i++){
    for(let j=num;j>=i;j--){
        process.stdout.write("* ");
    }
    console.log();
}