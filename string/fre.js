let str='naman'
let arr=new Array(128).fill(0)

for(let i=0;i<str.length;i++){
    let assci=str.charCodeAt(i)
    arr[assci]=arr[assci]+1
}

for(let i=0;i<arr.length;i++){
    if(arr[i]>0) console.log(String.fromCharCode(i)+"->"+arr[i]); 
}
