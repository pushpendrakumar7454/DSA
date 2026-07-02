let arr = [
    [2,3,45,6],
    [2,2,4,6],
    [3,4,5,6],
    [7,8,9,10]
]

let sum = 0;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(i == j || i + j == arr[i].length - 1){
            sum = sum + arr[i][j];
        }
    }
}

console.log("Diagonal Sum is", sum);