let str = "Hello kya hal chal";
let letter = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        count++;
    }
}

let percentage = Math.floor((count * 100) / str.length);

console.log("Count:", count);
console.log("Percentage:", percentage);