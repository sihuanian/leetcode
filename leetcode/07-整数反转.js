/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    /* if (!Number.isSafeInteger(x)) {
        return 0
    }
    let arr = Array.from(x.toString()),
        res = ''
    if (x >= 0) {
        res = arr.reverse().join('')
    } else {
        res = '-' + arr.slice(1).reverse().join('')
    }
    if (!Number.isSafeInteger(res -0)) {
        return 0
    }
    return res */
    let fuhao,
        temp = Math.abs(x),
        res
    
    if (temp > 2147483647) {
        return 0
    }
    
    if (x >= 0) {
        fuhao = true
    } else {
        fuhao = false
    }

    res = (temp+'').split('').reverse().join('')

    if (res > 2147483647) {
        return 0
    }

    return fuhao ? res : -res

};
console.log(reverse(1534236469))