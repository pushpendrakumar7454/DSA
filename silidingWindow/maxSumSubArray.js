//brute Forse
// function maxSubArray(arr,k){
//     let maxSum=-Infinity

//     for(let i=0;i<=arr.length-k;i++){
//         let sum=0

//         for(let j=i;j<i+k;j++){
//             sum+=arr[j]
//         }
//         maxSum=Math.max(maxSum,sum)
//     }
//     return maxSum
// }


// const arr=[3,4,5,6,8,9]
// let k=2

// console.log(maxSubArray(arr,k))

function maxSubArray(arr, k) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let max = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (j - i + 1 < k) {
            j++;
        } else {
            max = Math.max(max, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }

    return max;
}

const arr = [3, 4, 5, 6, 8, 9];
const k = 2;

console.log(maxSubArray(arr, k));