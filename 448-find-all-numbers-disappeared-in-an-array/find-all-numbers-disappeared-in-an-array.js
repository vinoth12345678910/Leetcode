/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    let n = nums.length;
    let numSet = new Set([...Array(n + 1).keys()].slice(1)); 

    for (let num of nums) {
        numSet.delete(num); 
    }

    return [...numSet]; 
}
