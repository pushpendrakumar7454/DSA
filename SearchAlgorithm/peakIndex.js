let arr=[2,4,6,10,1,2]



for(let i=0;i<arr.length;i++){
    let f=i-1,l=i+1
    if(arr[i]>arr[f] && arr[i]>arr[l]){
        console.log(arr[i]);
        
    }
    
}


