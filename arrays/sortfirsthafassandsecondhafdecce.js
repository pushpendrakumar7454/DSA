let arr = [9,4,7,2,8];

let n = arr.length;
let mid = Math.floor(n/2);

// First Half Ascending
for(let i=0;i<mid;i++){
    for(let j=i+1;j<mid;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

// Second Half Descending
for(let i=mid;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr);