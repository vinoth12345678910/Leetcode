/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let a = nums;
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            currentCount += 1;          // Increase current streak of 1's
            maxCount = Math.max(maxCount, currentCount); // Update max if current is greater
        } else {
            currentCount = 0;  // Reset count when encountering 0
        }
    }

    return maxCount;

};