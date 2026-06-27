let str="hello word"

let arr=new Array(128).fill(0)

for(let i=0;i<str.length;i++){
    let asci=str.charCodeAt(i)
    arr[asci]++
}

let max=0;
let ch="";

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
        ch=String.fromCharCode(i)
    }
}
console.log("Maximum character",ch);
console.log("Maximum fre",max);






