//binary seacrh
const promt=require('prompt-sync')()

let arr=[4,5,6,12,34,56,67]

let t=Number(promt("Enter your Element-::"))
let index=-1
let st=0;
let end=arr.length-1

for(let i=0;i<arr.length;i++){
    mid=Math.floor((st+end)/2)
    if(arr[mid]===t){
        index=mid;
        break
    }else if(arr[mid]<t) st=mid+1
    else ed=mid-1

}
if(index==-1) console.log('Not founded');
else console.log(`Value found at index ${index}`);

