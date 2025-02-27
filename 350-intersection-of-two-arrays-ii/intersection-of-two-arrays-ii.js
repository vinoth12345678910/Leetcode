/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    let map = new Map();
    let result = [];

    // Count occurrences of each number in nums1
    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Iterate through nums2 and check against nums1's counts
    for (let num of nums2) {
        if (map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);  // Decrease the count
        }
    }

    return result;
}

// Test Cases
console.log(intersect([1,2,2,1], [2,2]));   // Output: [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // Output: [4,9] (or [9,4])
