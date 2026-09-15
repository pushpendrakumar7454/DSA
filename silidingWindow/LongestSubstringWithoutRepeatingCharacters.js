function largestSubString(str){
    let i=0;
    let set=new Set()
    let maxLength=0

    for(let j=0;j<str.length;j++){
        while(set.has(str[j])){
            set.delete(str[i])
            i++
        }
        set.add(str[j])
        maxLength=Math.max(maxLength,j-i+1)
    }
    return maxLength
}

console.log(largestSubString("bbbbb"))