var trailingZeroes = function(n) {
    let res = factorial(n)
    let m = 10,
        count = 0
    while (Number.isInteger(res / m) && res > 1) {
        count++
        res /= m
    }
    return count
};

function factorial(num) {
    if (num < 0) {
        return
    }
    if (num === 0) {
        return 1
    }
    let res = 1
    for (let i = 1; i <= num; i++) {
        res *= i
    }
    return res
}

console.log(factorial(25))
console.log(trailingZeroes(25))
Number.parseInt