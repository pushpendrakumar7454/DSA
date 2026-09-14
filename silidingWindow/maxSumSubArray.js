//brute Forse
function maxSubArray(arr,k){
    let maxSum=-Infinity

    for(let i=0;i<=arr.length-k;i++){
        let sum=0

        for(let j=i;j<i+k;j++){
            sum+=arr[j]
        }
        maxSum=Math.max(maxSum,sum)
    }
    return maxSum
}


const arr=[3,4,5,6,8,9]
let k=2

console.log(maxSubArray(arr,k))