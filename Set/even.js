let arr=[3,4,5,3,2,6,8]
let set=new Set()

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        set.add(arr[i])
    }
}

console.log(set);
