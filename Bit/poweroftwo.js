let prompt = require("prompt-sync")();

let num = Number(prompt("Enter your num: "));

if (num > 0 && (num & (num - 1)) === 0) {
  console.log("This is power of two");
} else {
  console.log("Not a power of two");
}
