let image=[
    [1,1,0],
    [1,0,1],
    [0,0,0]
]


for(let i=0;i<image.length;i++){
    let arr=image[i]
    let k=0,j=arr.length-1

    while(k<j){
        let temp=arr[k]
        arr[k]=arr[j]
        arr[j]=temp
        k++;
        j--;
    }
    for(let i=0;i<image.length;i++){
        for(let j=0;j<image[i].length;j++){
            image[i][j]=image[i][j]==1?0:1
        }
    }
}

console.log(image);
