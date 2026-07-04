let arr = [3, 4, 5, 3, 4, 5, 6, 7, 8];

let set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) set.delete(arr[i]);
  else set.add(arr[i]);
}

console.log(set);
