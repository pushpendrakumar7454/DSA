let arr=[3,4,5,6,-7,5,4]

let maxSum=arr[0]
let currSum=0;

for(let i=0;i<arr.length;i++){
    currSum+=arr[i]

    if(currSum>maxSum){
        maxSum=currSum
    }
    if(currSum<0){
        currSum=0
    }
}

console.log(maxSum);
