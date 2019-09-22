var longestPalindrome = function (s) {
    let length = s.length
    if (length <= 1) {
        return s
    }
    let maxLength = 0, slice, arr = []
    for (let i = 0; i < length; i++) {
        let j = k = 0
        while (s[i-j] === s[i+j] && s[i-j] && s[i+j]) {
            j++
        }
        arr.push(s.slice(i-j+1, i+j))
        j = 0
        while (s[i-k] === s[i+k+1] && s[i-k] && s[i+k+1]) {
            k++
        }
        arr.push(s.slice(i-k+1, i+k+1))
        k = 0
    }

    return arr.sort((a, b) => b.length - a.length)[0]
};



console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))