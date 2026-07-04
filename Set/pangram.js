let str = "the quick brown fox jumps over the lazy dog";

let count=0;
str=str.toLowerCase()

let set = new Set();

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        set.add(str[i]);
    }
}

if (set.size === 26) {
    console.log("Pangram");
} else {
    console.log("Not pangram");
}

// for(let i=97;i<=122;i++){
//     let found=false;
//     for(let j=0;j<str.length;j++){
//         if(str[j]==String.fromCharCode(i)){
//             found=true
//             break;
//         }
//     }
//     if(found){
//         count++
//     }
// }

// if(count==26) console.log("Pangram");
// else console.log("Not pangram");

