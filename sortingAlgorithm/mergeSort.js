

function merge(f,l,mid,arr){
    let temp=new Array(l-f+1);
    let i=f,j=mid+1,k=0;
    while(i<=mid && j<=l){
        if(arr[i]<arr[j]) temp[k++]=arr[i++]
        else temp[k++]=arr[j++]
    }

    while(i<=mid) temp[k++]=arr[i++]
    while(j<=l) temp[k++]=arr[i++]
    i=k,k=0
    while(k<temp.length) arr[i++]=temp[k++]
}