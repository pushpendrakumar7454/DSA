let str = "abccbaacz";


let set = new Set();

for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
        console.log(str[i]);
        break;
    }

    set.add(str[i]);
}


// for(let i=0;i<str.length;i++){
//     let count=0;
//     for(let j=0;j<=i;j++){
//         if(str[i]==str[j]){
//             count++

//         }
//     }
//     if(count==2){
//         console.log(str[i]);
//        break
        
//     }
// }