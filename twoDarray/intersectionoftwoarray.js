let arr1=[4,5,65,4,6]
let arr2=[10,2,3,4,67]

let ans=0

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            console.log(arr1[i]); 
        }
    }
}