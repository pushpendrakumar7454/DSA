let arr=[4,5,6,7,0,1,2]
let t=0;
let st=0;
let ed=arr.length-1
let ans=-1

while(st<=ed){
    let mid=Math.floor((st+ed)/2)
    if(arr[mid]==t){
        ans=mid
        break
    }
    if(arr[st]<arr[mid]){
        if(t>=arr[st] && t<arr[mid]){
            ed=mid-1


        }else{
            st=mid+1
        }
    }else{
        if(t>arr[ed] && t<=arr[mid]){
            st=mid+1
        }else{
            ed=mid-1
        }
    }
}


console.log(ans);