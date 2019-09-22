var reverseStr = function (s, k) {
    let slice = Math.ceil(s.length / k),
        result = ''

    for (let i = 0; i < slice; i += 2) {
        result += (Array.from(s.slice(i * k, (i + 1) * k)).reverse().join('') +
            s.slice((i + 1) * k, (i + 2) * k))
    }
    return result
};

console.log(reverseStr('abcdefg', 2))