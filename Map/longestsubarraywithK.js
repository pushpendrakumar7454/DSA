let arr = [1, 2, 3, 1, 1, 1, 1];
let k = 6;


let map=new Map()
let sum=0
let maxLen=0;


for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    if(sum==k){
        maxLen=i+1
    }
    let rem=sum-k

    if(map.has(rem)){
        maxLen=Math.max(maxLen,i-map.get(rem))
    }
    if(!map.has(sum)){
        map.set(sum,i)
    }
}

console.log(maxLen);


