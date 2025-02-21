/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

if (nums.includes(target)) {
    return nums.indexOf(target); // If target is in the array, print its index
} else {
    nums.push(target);
    nums.sort((x, y) => x - y); // Ensure the array is sorted
    return nums.indexOf(target); // Print the index of the inserted target
}

}
