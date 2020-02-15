# 简介
实现一个函数, 用于判断字符串是否表示数字(包括整数和小数)。例如 `+100`、`5e2`、`-123`、`3.1415`、`-1E-16`、`1.3e+12`、`.12`、`.5e12` 都表示数值, 但 `12e`、`1a3.14`、`1.2.3`、`+-5`、`12e+5.4` 则不是。

# 实现
关键在于提取固定的模式。
首先我们可以把字符串按照 `e` 或 `E` 的位置分为两个部分, 前面的部分判断是否是有符号小数, 后面的部分判断是否是有符号整数。
之后可以进一步分解, 在判断有符号小数时, 可以按照小数点位置将字符串分为两部分, 判断前面的部分是否是有符号整数, 后面的部分是否是无符号整数。
实现如下:
```js
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
```