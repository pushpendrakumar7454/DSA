let arr=[2,3,45,6,7,8]

let start=arr[0]

for(let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1]=start

console.log(arr);
