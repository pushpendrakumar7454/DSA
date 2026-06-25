const prompt=require('prompt-sync')()

let num=Number(prompt("Enter your number-::"))

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i==j || (i+j==num+1)){
            process.stdout.write('* ')
        }else{
           process.stdout.write("  ");
            
        }
    }
    console.log();
    
    
}