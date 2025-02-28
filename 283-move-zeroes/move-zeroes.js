var moveZeroes = function(nums) {
    let insertPos = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    // Fill the remaining positions with zeros
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};

// Example Usage
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]
