//selection sort
let arr=[455,32,23,13,3]

let n=arr.length;

for(let i=0;i<n-1;i++){
    let min=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]) min=j
    }
    if(arr[min]!=i){
        let temp=arr[min]
        arr[min]=arr[i]
        arr[i]=temp
        
    }

}
console.log(arr);
