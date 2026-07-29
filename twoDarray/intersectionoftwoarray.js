let arr1=[1,2,3,4,5]
let arr2=[5,6,7,8,9]


// //optimize approarch
let i=0,j=0

while(i<arr1.length && j<arr2.length){
    if(arr1[i]===arr2[j]){
        console.log(arr1[i]);
        i++
        j++
        
    }else if(arr1[i]<arr2[i]){
        i++
    }else{
        j++
    }
}

// brute forse
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             console.log(arr1[i]); 
//         }
//     }
// }