function numberOf1InBinary(num) {
    // 从数制转换到计算 1 的个数一步到位!
    return num.toString(2).match(/1/g).length;
}

function numberOf1InBinary(num) {
    let flag = 1;
    let count = 0;

    while (flag > 0) {
        if (num & flag) {
            count++;
        }
        flag << 1;
    }

    return count;
}

function numberOf1InBinary(num) {
    let count = 0;

    while (num > 0) {
        num = (num - 1) & num;
        count++;
    }

    return count;
}