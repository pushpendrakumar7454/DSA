//liner search
const promt=require('prompt-sync')()
let arr=[3,4,5,6,7,8,9]
let index=-1
let t=Number(promt("Enter your Element-::"))

for(let i=0;i<arr.length;i++){
    if(arr[i]===t){
        index=i;
        break;
    }
}
if(index==-1){
    console.log("not found");
    
}else{
    console.log(`Value found at index ${index}`);
    
}