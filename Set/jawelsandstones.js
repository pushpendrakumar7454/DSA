let stones = "aBBaAA";
let jawels = "aA";

let set=new Set()
let count=0;

for(let i=0;i<jawels.length;i++){
    let ch=jawels.charAt(i)
    set.add(ch)
}

for(let i=0;i<stones.length;i++){
    if(set.has(stones.charAt(i))){
        count++
    }
}
console.log(count);





// let count = 0;

// for (let i = 0; i < stones.length; i++) {
//     for (let j = 0; j < jawels.length; j++) {
//         if (stones[i] === jawels[j]) {
//             count++;
//             break; 
//         }
//     }
// }

// console.log(count);

