/**
 * @param {number} n
 * @return {boolean}
 **/
var isUgly = function(n) {
    if (n <= 0) return false;

    // Divide by 2, 3, and 5 as long as possible
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;

    // If the remaining number is 1, it's an ugly number
    return n === 1;
};
