let arr=[3,3,22,22,4,5,6,6,7,7]
let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)

    }else{
        map.set(arr[i],1)
    }
}
let sum=0

for(let [key,value] of map){
    if(value==1){
        sum=sum+key
    }
}
console.log(sum);

