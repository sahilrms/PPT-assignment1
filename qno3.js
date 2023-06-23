// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2

function Search(arr,item){
 let i,j,mid;
 i=0;
 j=arr.length-1;

 while(i<=j){
    mid=Math.floor((i+j)/2)
    if(arr[mid]===item){
        console.log(`${item} found at ${mid} as ${arr[mid]}`)
        break;
    }
    else if(arr[mid]<item){
        i=mid+1
    }
    else{
        j=mid-1;
    }
 }
 if(i>j){
    console.log("item not found")
 }
}

Search([1,2,3,5,6,8,10,15,18,19,22,23,29,43,48],1)