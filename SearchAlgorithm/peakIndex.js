let arr = [2,3,4,5,10,2,1];

let st=0,ed=arr.length-1
let ans=-1

while(st<ed){
    let mid=Math.floor((st+ed)/2)
    if(arr[mid]<arr[mid+1]){
        ans=mid+1
        st=mid+1
    }else{
        ans=mid
        ed=mid
    }
}
console.log(ans);









//brute forse
// for(let i=0;i<arr.length;i++){
//     let f=i-1,l=i+1
//     if(arr[i]>arr[f] && arr[i]>arr[l]){
//         console.log(arr[i]);
        
//     }
    
// }


