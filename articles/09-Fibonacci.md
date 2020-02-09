# 简介
实现一个求斐波那契数列的函数。

# 实现
斐波那契公式如下:
> f(0) = 0
> f(1) = 1
> f(n) = f(n - 1) + f(n - 2) (n > 1)

斐波那契数列所传递出的最基本思想是, 大问题可以通过小问题来解决。有了这种思想, 很多类似的问题都能得到解决。
当遇到大问题时, 可以尝试使用**数学归纳法**, 将大问题转化为小问题来解决。
下面是实现的具体代码:
```js
function Fibonacci(n) {
    if(n < 0) {
        throw new Error('Invalid Input!')
    }else if(n <= 1) {
        return n;
    }

    let fibMinusTwo = 0;
    let fibMinusOne = 1;
    let fibN = 0;

    while(n > 1) {
        fibN = fibMinusOne + fibMinusTwo;
        fibMinusTwo = fibMinusOne;
        fibMinusOne = fibN;

        n--;
    }

    return fibN;
}
```

# 相关问题
* 青蛙跳台阶问题: 一只青蛙, 一次只能跳一个或两个台阶。现在有 n 个台阶, 青蛙要想跳到最高处的台阶, 有多少种跳法?
* 青蛙跳台阶问题的扩展: 一只青蛙, 一次只能跳 1 - n 个台阶。现在有 n 个台阶, 青蛙要想跳到最高处的台阶, 有多少种跳法?
用数学归纳法可以证明 **f(n) = 2 ^ n - 1**。
* 矩形覆盖问题: 现在有若干个 2 * 1 的矩形块, 用这些矩形块去覆盖 2 * n 的矩形面积, 有多少种覆盖的方法?