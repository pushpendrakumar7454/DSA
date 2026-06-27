const promt=require('prompt-sync')()

let str=promt("Enter your string-::")

let i=0;
let j=str.length-1
let isPalindrome=true

while(i<j){
    if(str.charAt[i]!=str.charAt[j]){
        isPalindrome=false
        break
    }
    j--
    i++
}
if(isPalindrome) console.log("Palindrome");
else console.log("Not Palindrome");



