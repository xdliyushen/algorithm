function isNumericStrings(str) {
    // 按照 e/E 的位置划分字符
    if (str.includes('e') || str.includes('E')) {
        let eIndex = str.includes('e') ? str.indexOf('e') : str.indexOf('E');

        return isSignedFloat(str.slice(0, eIndex)) && isSignedInt(str.slice(eIndex + 1));
    } else {
        return isSignedFloat(str);
    }
}

// 判断字符串是否是不带符号的整数
function isUnsignedInt(str) {
    return (/^[0-9]+$/).test(str);
}

// 判断字符串是否是带符号的整数
function isSignedInt(str) {
    return (/^[+-]?[0-9]+$/).test(str);
}

// 判断字符串是否是带符号的小数
function isSignedFloat(str) {
    // 按照小数点的位置划分字符
    if (str.includes('.')) {
        let dotIndex = str.indexOf('.');

        // 小数点之前无数字
        if (dotIndex === 0) {
            return isUnsignedInt(str.slice(dotIndex + 1));
        } else {
            return isSignedInt(str.slice(0, dotIndex)) && isUnsignedInt(str.slice(dotIndex + 1));
        }
    } else {
        return isSignedInt(str);
    }
}