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
let mostFre=0;

for(let [num,freq] of map){
    if(num%2==0){
        if(freq>mostFre){
            mostFre=freq
            ans=num
        }else if(freq===mostFre && num<ans){
            ans=num
        }
    }
}
console.log(ans);
