/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let c = []
    
    for(let i = 0;i<nums.length;i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
        if (nums[j] < nums[i]) {  // Count numbers smaller than a[i]
            count++;
        }
    }
    c.push(count);
    }
    return (c)
};