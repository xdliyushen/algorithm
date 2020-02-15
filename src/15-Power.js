function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else if (exponent == 1) {
        return base;
    }

    let result = power(base, exponent >> 1);
    result *= result;

    // 用位运算判断奇偶
    if (exponent & 0b1 === 1) {
        result *= base;
    }

    return result;
}