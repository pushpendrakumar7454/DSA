// function findpartitions(arr,f,l){
//     let i=f-1,j=f,pivot=arr[l]
//     while(j<l){
//         if(arr[j]<pivot){
//             i++
//             swap(arr,i,j)
//         }
//         j++
//     }
//     i++
//     swap(arr,i,l)
//     return i

// }

// function swap(arr,i,j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }


// function quickSort(arr,f,l){
//     if(f>l) return
//     let pInx=findpartitions(arr,f,l)
//     quickSort(arr,f,pInx-1)
//     quickSort(arr,pInx+1,l)

// }

// let arr=[44,3,2,3,56,4,6,7]
// quickSort(arr,0,arr.length-1)
// console.log(arr);







function findpartitions(arr,f,l){
    let i=f-1,j=f,pivot=arr[l]
    while(j<l){
        if(arr[j]<pivot){
            i++
            swap(arr,i,j)
        }
        j++
    }
    i++
    swap(arr,i,l)
    return i
}


function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}


function quickSort(arr,f,l){
    if(f>l) return
    let pInx=findpartitions(arr,f,l)
    quickSort(arr,f,pInx-1)
    quickSort(arr,pInx+1,l)
}

let arr=[54,56,43,2,32,13]
quickSort(arr,0,arr.length-1)
console.log(arr);
















