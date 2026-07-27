let arr=[56,42,12,34,55,6]
let st=0,l=arr.length-1
let t=42;
let index=-1;


function sort(){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j+1]<arr[j]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
sort()
console.log(arr);

while(st<=l){
    let mid=Math.floor((st+l)/2)
    if(arr[mid]==t){
        index=mid
        break
    }else if(arr[mid]<t) st=mid+1
    else l=mid-1
}

if(index===-1){
    console.log("Not found");
    

}else {
    console.log("Founded");
    
}