

const promt=require('prompt-sync')()
let num=Number(promt("Enter your number-::"))

for (let i=1; i<=num; i++) {
        for (let j=1; j<=num*2-1; j++) {
            if (j==i || j==(num*2-i)) {
                process.stdout.write('* ')
            } else {
                process.stdout.write('  ')
            }
        }
        console.log();
    }