let arr=[0,0,4,0,5,0,10,3]

let j=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        j++
    }
}
console.log(arr);

