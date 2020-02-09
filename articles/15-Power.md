# 简介
实现 Math.pow 函数。不得使用库函数, 不用考虑大数问题

# 实现
原理很简单, 可以通过如下公式来计算 a 的 n 次方:
> a^n = a^(n/2) * a^(n/2) (n 为偶数)
> a^n = a^((n-1)/2) * a^((n-1)/2) * a (n 为奇数)

```js
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
```