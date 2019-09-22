var lengthOfLongestSubstring = function(s) {
    // 'dfjsgsjgsdgio'
        let j = 0, index = 0, num = 0
        for (let i = 0; i < s.length; i++) {
            index = s.slice(j, i).indexOf(s[i]) // 截取的字符串最后一个字符在这个截取字符串第一次出现的位置
            if (index == -1) {
                num = Math.max(num,i - j + 1) // 如果没有找到与最后一个数相同的数，最长的字符串为这个截取的字符串的长度
            } else {
                j = j + index + 1 // 如果找到了，截取的start 就要改变
            }
        }
        return num
    };
    