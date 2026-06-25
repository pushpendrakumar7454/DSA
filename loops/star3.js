const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your number-::"))

for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
       process.stdout.write('* ')
    }
    console.log(); 
}

for(let i=1;i<=num;i++){
    for(let j=num;j>=i;j--){
         process.stdout.write('* ')
    }
    console.log();
    
}