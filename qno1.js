// **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

const arrayOfIntegers = [2,5,7,8,11,13];
const target=15;
let found=false;
let i,j;
for(i=0;i<arrayOfIntegers.length-1;i++){
    for(j=i+1;j<arrayOfIntegers.length;j++){
       if(arrayOfIntegers[i]+arrayOfIntegers[j]===target){
            found=true
            console.log(`At ${i}th position ${arrayOfIntegers[i]},${j}th position ${arrayOfIntegers[j]} gives sum = ${target}`)
            break;
        }
       
    }
    if(found===true)break
}

if(found === false){
    console.log("sum not found")
}
