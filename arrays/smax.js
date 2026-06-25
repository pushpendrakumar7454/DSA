let arr=[4,5,6,8,9,15,20,20,21]

let max=arr[0];
let smax=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        smax=max
        max=arr[i]
    }else if(arr[i]>smax && max!=arr[i]){
        smax=arr[i]
    }
}
console.log(smax);
