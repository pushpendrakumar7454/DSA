let prompt = require('prompt-sync')();
let num = Number(prompt("Enter your number-::"));


let isPrime=false
for(let i = 2; i <= num; i++) {
    if(num % i === 0) {
        isPrime = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}



