
let arr=[34,5,3,3,4,5,3]

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
        
    }

}

for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
        arr.splice(i,1)
        i--
    }
}


console.log(arr);

