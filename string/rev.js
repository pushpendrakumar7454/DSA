const promt=require('prompt-sync')()

let str=promt("Enter your string-::")
let rev="";

for(let i=0;i<str.length;i++){
    rev=str[i]+rev
}
console.log(rev);
