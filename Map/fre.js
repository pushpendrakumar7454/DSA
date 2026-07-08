let arr=[1,2,2,4,45,56,3,2,2]
let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[1])+1)

    }else{
        map.set(arr[i],1)
    }
}
console.log(map);

// let fre={}

// for(let i=0;i<arr.length;i++){
//     if(fre[arr[i]]){
//         fre[arr[i]]++
//     }else{
//         fre[arr[i]]=1
//     }
// }
// console.log(fre);

// let str='programing'
// let fre={}

// for(let i=0;i<str.length;i++){
//     let ch=str[i]
//      if(fre[ch]){
//         fre[ch]++
//      }else{
//         fre[ch]=1
//      }
// }
// console.log(fre);


// let str="App mere bahut acche dost ho mere ho mere samjhe"

// let s=str.split(" ")
// let fre={}

// for(let i=0;i<s.length;i++){
//     let word=s[i]
//     if(fre[word]){
//         fre[word]++
//     }else{
//         fre[word]=1
//     }
// }

// console.log(fre);
