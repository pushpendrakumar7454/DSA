function cyclicSort(arr,){
    let i=0;
    while(i<arr.length){
        let cIdx=arr[i]-1
        if(arr[i]!=arr[cIdx]){
            swap(arr,i,cIdx)
        }else i++
    }
}


function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}


let arr=[5,4,3,2,1,7,6]
cyclicSort(arr)
console.log(arr);
