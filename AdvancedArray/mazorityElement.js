// Majority Element is the element that appears more than n/2 times in an array, where n is the length of the array.


let arr=[3,4,5,,5,5,5,4,5,3,3]
let ans=arr[0]
let count=1;
let n=arr.length

for(let i=0;i<n;i++){
    if(count==0){
        ans=arr[i]
        count=1

    }else if(arr[i]==ans) count++
    else count--
}

console.log(ans);


