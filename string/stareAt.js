const str=["attent","attention","pay","practice","att"]

const pre= 'at';
let count=0;

for(let i=0;i<str.length;i++){
    if(str[i].startsWith(pre)) count++
}
console.log(count);


