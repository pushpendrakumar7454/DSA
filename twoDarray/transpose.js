let mat=[
    [2,3,4,5],
    [3,4,6,7],
    [4,5,6,7]
]

let arr=[];

for(let i=0;i<mat[0].length;i++){
    arr[i]=new Array(mat.length)

}

for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
        arr[j][i]=mat[i][j]
    }
}
console.log("Traspose Matrix",arr);
