const arr=[3,4,'a','*',"b","*","hello",true]

let count=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]==="*"){
        count++;
    }
}
console.log('Total Asterisks:',count);
