# 简介
输入数字 n, 按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3, 则打印出 1、2、3、...、999。

# 实现
这道题的陷阱在于: 当 N 特别大时, 会不可避免的出现大数问题。
为了解决这个问题, 我们需要用字符串来代替数字。

```js
function print1ToMaxOfDigits(n) {
    if (n <= 0) {
        return;
    }

    let str = '1';

    while (str.length <= n) {
        console.log(str);
        str = strPlusOne(str);
    }
}

function strPlusOne(str) {
    if (!str) {
        return '1';
    }

    let len = str.length;
    let lastLetter = str[len - 1];

    // 若字符串末尾不为 9, 则直接末尾加一即可
    if (lastLetter !== '9') {
        str = str.slice(0, -1) + (parseInt(lastLetter) + 1 + '');
    } else {
    // 若字符串末尾为 9, 则将前面的数字进行进位后, 在最后一位补上 0
        str = strPlusOne(str.slice(0, -1)) + '0';
    }

    return str;
}
```

# 相关题目
实现大数加法, 注意如果实现的数字中有负数, 应该怎么办? **很简单, 使用变量存储进位的正负即可。**