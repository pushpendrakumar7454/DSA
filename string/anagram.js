let str1 = "car";
let str2 = "arc";

// let arr = new Array(128).fill(0);
// let ans1 = "";
// let ans2 = "";

// if (str1.length !== str2.length) {
//     console.log("Not Anagram");
// } else {

//     // str1 ki frequency
//     for (let i = 0; i < str1.length; i++) {
//         let ascii = str1.charCodeAt(i);
//         arr[ascii]++;
//     }

//     // ans1 banana
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             ans1 += String.fromCharCode(i) + arr[i];
//         }
//     }

//     // array reset
//     arr.fill(0);

//     // str2 ki frequency
//     for (let i = 0; i < str2.length; i++) {
//         let ascii = str2.charCodeAt(i);
//         arr[ascii]++;
//     }

//     // ans2 banana
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             ans2 += String.fromCharCode(i) + arr[i];
//         }
//     }

//     if (ans1 === ans2) {
//         console.log("Anagram");
//     } else {
//         console.log("Not Anagram");
//     }
// }

let arr=new Array(128).fill(0)

for(let i=0;i<str1.length;i++){
   arr[str1.charCodeAt(i)]++
}

for(let i=0;i<str2.length;i++){
    arr[str2.charCodeAt(i)]--
}

let flag=true;

for(let i=0;i<128;i++){
    if(arr[i]!==0){
        flag=false;
        break;
    }
}

if(flag) console.log("Anagram");
else console.log("Not anagram");

