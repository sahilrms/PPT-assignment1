// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
let nums=[1,2,3,4,5,6,7,8,1];
let flag=false;
for(let i=0;i<nums.length-1;i++){
    for(j=i+1;j<nums.length;j++){
        if(nums[i]===nums[j]){
            flag=true;
            break
        }
    }
}
console.log(flag)