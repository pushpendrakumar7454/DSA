// Dutch National Flag Algorithm
let arr=[2,0,1,1,2,0,1,1]

let l=arr.length

function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}


let i=0,j=0,k=l-1;

while(i<=k){
    if(arr[i]==0){
        swap(arr,i,j)
        i++;
        j++
    }else if(arr[i]==2){
        swap(arr,i,k)
        k--;
    }else{
        i++
    }
}

console.log(arr);



