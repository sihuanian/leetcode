var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }
    let res = strs[0] ? strs[0] : ''
    for (const item of strs) {
        let parrten = new RegExp('^' + res)
        while(!parrten.test(item) && res.length) {
            res = res.slice(0, res.length - 1)
            parrten = new RegExp('^' + res)
        }
    }
    return res

};




console.log(longestCommonPrefix([]))