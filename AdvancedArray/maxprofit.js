let arr = [4, 5, 6, 9, 7, 5, 3];

let min=arr[0]
let maxProfit=0,n=arr.length

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }else if(arr[i]-min>maxProfit){
        maxProfit=arr[i]-min
    }
}

console.log(maxProfit);

