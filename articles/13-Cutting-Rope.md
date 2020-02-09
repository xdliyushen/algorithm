# 简介
给定长度为 n 的绳子, 把绳子切成 m 段(m, n 均为整数, 且m 和 n 均大于 1), 每段记为长度 k[0], k[1], ... , k[m - 1], 求 k[0] * k[1] * ... * k[m - 1] 的最大乘积为多少?

# 实现
有两种做法, 一种是动态规划, 一种是贪婪算法。

## 动态规划
我们将问题分解, 设长度为 n 的绳子切割而成的最大乘积为 f(n)。我们先剪第一刀, 可选择的范围是 [1, n - 1]。因此则
> f(n) = Max(f(i) * f(n - i)) 1 < i < n

这是一个递归的公式, 直接使用递归会有很多冗余调用, 因此我们用数组把之前的最优解都保存起来。
当 n = 1 时, 由于规定**必须剪一刀(m > 1),** 所以 f(1) = 0。
当 n = 2 时, 由于规定**必须剪一刀(m > 1),** 所以 f(2) = 1。
当 n = 3 时, f(3) = 2。
这些值可以作为数组的初始值放入数组中。
代码实现如下:
```js
function cuttingRope(ropeLength) {
    if(ropeLength < 2) {
        return 0;
    } else if(ropeLength == 2) {
        return 1;
    } else if(ropeLength == 3) {
        return 2;
    }

    // 注意这里!!
    let products = [0, 1, 2, 3];
    let max = 0;

    for (let i = 4; i <= ropeLength; i++) {
        let max = 0;

        // 为了求解 f(i), 找出所有可能的 f(i) * f(n - i), 取最大值
        for (let j = 1; j <= i / 2; j++) {
            if (products[j] * products[i - j] > max) {
                max = products[j] * products[i - j]
            }
        }

        products[i] = max;
    }

    max = products.pop();
    // 释放内存
    products = null;

    return max;
}
```
要注意其中的 `products` 数组, 该数组中的 products[i] 表示把长度为 i 的绳子切成若干段后各段乘积的最大值, 即 f(i)。
**这个表述其实并不是很准确,** 因为 products[3] 中保存的, 并不是切割长度为 3 的绳子所能达到的最大值。这个数组的前 4 个元素之所以是这样, 是因为**其默认后面至少还有一刀,** 所以才会 products[3] 才会和 f(3) 不同。

## 贪心算法
按照如下规则进行切割, 即可得到最大乘积: **当 n >= 5 时, 尽可能多地剪长度为 3 的绳子; 当 n 剩下的长度为 4 时, 将绳子剪为两段长度为 2 的绳子。**
实现如下:
```js
function cuttingRope(ropeLength) {
    if (ropeLength < 2) {
        return 0;
    } else if (ropeLength == 2) {
        return 1;
    } else if (ropeLength == 3) {
        return 2;
    }

    // 尽可能多地剪长度为 3 的绳子
    let timesOf3 = Math.floor(ropeLength / 3);

    // 当最后剩下的绳子长度为 4 时, 不要再去剪长度为 3 的绳子了
    if(ropeLength - 3 * timesOf3 === 1) {
        timesOf3--;
    }

    let timesOf2 = (ropeLength - 3 * timesOf3) / 2;

    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}
```
这种思路的难点在于要找到切割绳子的策略, 可以通过数学计算来证明。
