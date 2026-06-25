let arr=[3,4,5,6,86,78,64,1]
let min=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min);
