let arr = [2,3,4,5,10,2,1];

let st = 0;
let ed = arr.length - 1;

while (st < ed) {
    let mid = Math.floor((st + ed) / 2);

    if (arr[mid] < arr[mid + 1]) {
        st = mid + 1;
    } else {
        ed = mid;
    }
}

console.log(st); // 3
console.log(arr[st]); // 10








//brute forse
// for(let i=0;i<arr.length;i++){
//     let f=i-1,l=i+1
//     if(arr[i]>arr[f] && arr[i]>arr[l]){
//         console.log(arr[i]);
        
//     }
    
// }


