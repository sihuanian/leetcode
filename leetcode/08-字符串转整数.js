/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim()
    let firstStr = str.substring(0, 1)
    if (firstStr != '+' && firstStr != '-' && !Number.isInteger(firstStr - 0)) {
        return 0
    }
    if (str == '+' || str == '-') {
        return 0
    }

    let res = ''
    let subStr = str.substring(1) // 非符号位字符串
    let sub = subStr.substring(0, 1)
    if (Number.isInteger(sub) && sub != '.') {
        return 0
    }

    for (const i of subStr) {
        if (Number.isInteger(parseInt(i))) {
            res += i
        } else {
            break
        }
    }


    res = firstStr + res

    if (res > 2 ** 31 - 1) {
        return 2 ** 31 - 1
    }
    if (res < -(2 ** 31)) {
        return -(2 ** 31)
    }
    if (res.length === 1) {
        return 0
    }

    return res
}

console.log(myAtoi("3.4"))

/* var myAtoi = function (str) {
    return Math.max(-2147483648, Math.min(2147483647,(!parseInt(str) ? 0 : parseInt(str))));
};
var myAtoi = function (str) {
    var flag = 0;
    var flagNum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            str = str.substr(i, str.length - i);
            if (str[0] == '-' || str[0] == "+") {
                flag++;
            }
            break;
        }
    }
    // console.log("去除空格", str);
    for (var i = 0; i < str.length; i++) {
        //console.log('step:',i,str[i],flag,flagNum)
        if (str[i] == ' ') {
            str = str.substr(0, i);
            break;
        } else if (str[i] * 0 == 0) {

        } else if (str[i] == '-' || str[i] == '+') {
            if (flagNum < flag)
                flagNum++;
            else {
                str = str.substr(0, i);
                break;
            }
        } else {
            str = str.substr(0, i);
            break;
        }
    }
    str = str * 1;
    if (str > 2147483647) {
        return 2147483647;
    } else if (str < -2147483648) {
        return -2147483648;
    } else if (!str) {
        return 0;
    }
    return str;
}
 */