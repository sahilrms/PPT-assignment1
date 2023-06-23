
//  💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0] 

let nums=[0,1,0,3,12,4,5,0,0];
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]>nums[j]){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
    }
}
while(nums[0]===0){
    nums.push(nums.shift())
}
console.log(nums)