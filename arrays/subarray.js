let arr=[4,5,6,78,97,6,5]
let t=11


let count=0;
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=i;j<arr.length;j++){
        sum=sum+arr[j]
        if(sum===t){
            count++
        } 
    }
    
}
console.log(count);

