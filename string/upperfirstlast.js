const str="hello kya hal chal";
let s=str.split(" ");
let ans="";

for(let i=0;i<s.length;i++){
    let word=s[i]
    let first=word.charAt(0).toUpperCase();
    let mid=word.substring(1, word.length-1)
    let last=word.charAt(word.length-1).toUpperCase()

    ans+=first+mid+last+" "
}
console.log(ans);

