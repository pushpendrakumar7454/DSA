function marge(arr,f,l,mid){
    let temp=new Array(l-f+1)
    let i=f,j=mid+1,k=0;

    while(i<=mid && j<=l){
        if(arr[i]<arr[j]) temp[k++]=arr[i++]
        else temp[k++]=arr[j++]
    }
    while(i<=mid) temp[k++]=arr[i++]
    while(j<=l) temp[k++]=arr[j++]
    i=f,k=0;
    while(k<temp.length) arr[i++]=temp[k++]
}


function deivide(arr,f,l){
    if(f>=l) return
    let mid=Math.floor((f+l)/2)
    deivide(arr,f,mid)
    deivide(arr,mid+1,l)
    marge(arr,f,l,mid)
}


let arr=[6,5,433,4,5]
deivide(arr,0,arr.length-1)
console.log(arr);
