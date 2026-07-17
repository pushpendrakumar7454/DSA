let arr=[3,4,0,4,5,0,32,0]

let count=0;

let n=arr.length

for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        count++
    }
}
let i=n-1,j=count+n-1

while(i>=0){
    if(j<n){
        arr[j]=arr[i]
    }
    if(arr[i]==0){
        j--
        if(j<n){
            arr[j]=0
        }
    }
    j--
    i--
}

console.log(arr);
