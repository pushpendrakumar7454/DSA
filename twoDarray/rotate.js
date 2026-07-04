let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<matrix.length;i++){
    for(let j=i+1;j<matrix.length;j++){
        let temp=matrix[i][j]
        matrix[i][j]=matrix[j][i]
        matrix[j][i]=temp
    }
}

for(let i=0;i<matrix.length;i++){
    let left=0,right=matrix[i].length-1
    while(left<right){
        let temp=matrix[i][left]
        matrix[i][left]=matrix[i][right]
        matrix[i][right]=temp
        left++
        right--
    }
}

console.log(matrix);
