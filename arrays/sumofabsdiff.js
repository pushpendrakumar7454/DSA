let arr = [1, 4, 6];
let sum = 0;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            sum+=arr[i]-arr[j]
        }else{
            sum+=arr[j]-arr[i]
        }
    }
}
console.log(sum);
