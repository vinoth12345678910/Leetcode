/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0; // points to the next position to overwrite

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // overwrite the current index
            k++;
        }
    }

    return k; // number of elements not equal to val
}
