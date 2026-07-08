let arr=[2,3,4,30,6,7]
let target=34


let ans=[]
let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(target-arr[i])){
        ans.push(i)
        ans.push(map.get(target-arr[i]))
    }else{
        map.set(arr[i],i)
    }
}

console.log(ans);


// let found =false;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             found=true
//             console.log(i,j);
//             break
            
//         }
//     }
// }

// if(found) console.log("Two Sum");
// else console.log("Not Two sum");

