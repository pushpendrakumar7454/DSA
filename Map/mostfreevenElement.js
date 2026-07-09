let arr=[4,5,6,3,4,4,2,2,2]

let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)

    }else{
        map.set(arr[i],1)
    }
}

let ans=-1
let freMax=0;

for(let [num,fre] of map){
    if(num%2==0){
        if(fre>freMax){
            freMax=fre
            ans=num
        }else if(fre===freMax && num<ans){
            ans=num
        }
    }
}
console.log(ans);

