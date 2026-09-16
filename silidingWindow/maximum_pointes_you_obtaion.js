function maximumPointsByObtainingCards(arr,k){
    let max=0
    let rightSum=0
    let leftSum=0

    for(let i=0;i<k;i++){
        leftSum+=arr[i]
    }
    max=leftSum
    let j=arr.length-1

    for(let i=k-1;i>=0;i--){
        leftSum-=arr[i]
        rightSum+=arr[j]
        j--

        max=Math.max(max,rightSum+leftSum)
    }
    return max
}

let arr = [1, 2, 3, 4, 5, 6, 1] 
let k = 3
console.log(maximumPointsByObtainingCards(arr, k))