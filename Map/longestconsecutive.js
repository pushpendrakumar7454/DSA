let arr=[100,2,10,1,101,3,11,4,12]

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
}

let count=1
let longest=0;

for(let i=0;i<arr.length-1;i++){
    if(arr[i+1]===arr[i]+1) count++
    else{
        longest=Math.max(longest,count)
        count=1
    }
    
}
longest=Math.max(longest,count)
console.log(longest);
