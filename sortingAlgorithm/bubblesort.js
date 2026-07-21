
//bubble sort
let arr=[4,5,3,22,3,452,1,2]

let n=arr.length;
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr);
