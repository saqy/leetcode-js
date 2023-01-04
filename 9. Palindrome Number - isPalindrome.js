/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x.toString() === x.toString().split('').reverse().join('')){
        return true;
    }
     return false;
};

// Time comlexity is 0(n), which can be improved 