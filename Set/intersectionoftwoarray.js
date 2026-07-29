let arr1=[3,4,53,2,3]
let arr2=[45,4,3,6,7]

let set=new Set(arr1)

for(let i=0;i<arr2.length;i++){
    if(set.has(arr2[i])){
        console.log(arr2[i]);
        set.delete(arr2[i])
        
    }
}