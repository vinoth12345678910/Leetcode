var twoSum = function(nums, target) {
    const hashmap = new Map(); // Initialize a HashMap
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Find the required number to reach target
        
        if (hashmap.has(complement)) {
            return [hashmap.get(complement), i]; // Return indices
        }
        
        hashmap.set(nums[i], i); // Store the number and its index
    }
    
    return []; // Return empty array if no solution found (though problem guarantees one solution)
};

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
