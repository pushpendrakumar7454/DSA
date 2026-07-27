let arr=[56,42,12,34,55,6]
let st=0,l=arr.length-1
let t=54;
let index=-1;




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
    let cIdx=findpartitions(arr,f,l)
    quickSort(arr,f,cIdx-1)
    quickSort(arr,cIdx+1,l)
}

quickSort(arr,0,arr.length-1)
console.log(arr);


while(st<=l){
    let mid=Math.floor((st+l)/2)
    if(arr[mid]===t){
        index=mid;
        break
    }else if(arr[mid]<t) {
        index=mid
        st=mid+1
    }
    else l=mid-1
}

console.log(index);



