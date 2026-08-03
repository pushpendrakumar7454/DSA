let arr=[100,2,10,1,101,3,11,4,12]


function findpartitions(arr,f,l){
    let i=f-1,j=f,pivot=arr[l]
    while(j<l){
        if(arr[j]<pivot){
            i++
            swap(arr,i,j)

        }
        j++
    }
    i++
    swap(arr,i,l)
    return i
}


function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function quickSort(arr,f,l){
    if(f>l) return
    let pIdx=findpartitions(arr,f,l)
    quickSort(arr,f,pIdx-1)
    quickSort(arr,pIdx+1,l)
}

quickSort(arr,0,arr.length-1)
console.log(arr);


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




