/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
//     if (x.toString() === x.toString().split('').reverse().join('')){
//         return true;
//     }
//      return false;
// };

var isPalindrome = function (x) {
  let reversedNumber = 0

  const orignialNumber = x
  while (x > 0) {
    const lastDigit = x % 10
    reversedNumber = reversedNumber * 10 + lastDigit
    x = Math.floor(x / 10)
  }

  return reversedNumber === orignialNumber
}

// Time comlexity is 0(n)
