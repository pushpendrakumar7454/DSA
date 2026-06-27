const promt=require('prompt-sync')()

let str="Hello Kya Hal Chal"
let ans="";

for(let i=0;i<str.length;i++){
    let assci=str.charCodeAt(i)
    if(assci>=65 && assci<=90){
        ans=ans+String.fromCharCode(assci+32)
    }else{
        ans=ans+String.fromCharCode(assci-32)
    }
}

console.log(ans);
