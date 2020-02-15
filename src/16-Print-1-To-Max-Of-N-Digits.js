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