/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let a = numbers
    let myMap = new Map();
let d = [];
for (let i = 0; i < a.length; i++) {
    let complement = target - a[i]; // Find the number needed to reach the target

    if (myMap.has(complement)) {
        d.push(myMap.get(complement)+1, i+1); // Store the indices of the pair
        break; // Found the pair, so exit the loop
    }

    myMap.set(a[i], i); // Store the value and its index
}
return d
};