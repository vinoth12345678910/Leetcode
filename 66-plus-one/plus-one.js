/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Increase the current digit
            return digits; // Return the modified array
        }
        digits[i] = 0; // Set to 0 if it was 9
    }
    
    // If all digits were 9, we need to add an extra 1 at the front
    digits.unshift(1);
    return digits;
};