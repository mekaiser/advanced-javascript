const nums = [1,-2,3,4,-5,-6,7,-8,9];
for(let i = 0; i < nums.length; i++){
    // if(nums[i] > 3){ // if condition is true, then for loop will break
    //     break;
    // }
    if(nums[i] < 0){ // if condition is true, then for loop will continue
        continue;
    }
    console.log(nums[i]);
}