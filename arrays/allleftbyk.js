let arr = [3,4,5,6,88,6];
let k = 3;

for(let j = 1; j <= k; j++) {
    let first = arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = first;
}

console.log(arr);