let arr1 = [4, 5, 65, 4, 6];
let arr2 = [10, 2, 3, 4, 67, 4];

let map=new Map()

for(let i=0;i<arr1.length;i++){
    if(map.has(arr1[i])){
        map.set(arr1[i],map.get(arr1[i])+1)

    }else{
        map.set(arr1[i],1)
    }
}
console.log(map);
