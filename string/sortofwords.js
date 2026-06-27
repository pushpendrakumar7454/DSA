let str="taj mahal is situated at agra"

let arr=str.split(" ")
let n=arr.length
for(i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr.join(" "));
