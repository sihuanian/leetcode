/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    /* let str = String(x)
    let str1 = Array.from(str).reverse().join('')
    return str === str1 */

    let str1 = String(x),
        str2 = ''

    if (x = 0) {
        return true
    }


    while (x > 0) {
        str2 += x % 10
        x = parseInt(x / 10)
    }
    return str1 === str2
};

console.log(isPalindrome(121))