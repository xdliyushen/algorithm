# 简介
输入一个整数数组, 实现一个函数来调整该数组中数字的顺序, 使得所有奇数位于数组的前半部分, 偶数位于数组的后半部分。

# 实现
使用两个指针指向数组头尾, 前面的指针向后移动, 后面的指针向前移动。当前面的指针指向一个偶数, 后面的指针指向一个奇数时, 交换两个元素的位置。
这道题其实并不这么简单, 关键在于**如果判断条件变化时应该如何处理。**比如要求变为将所有大于 3 的元素放在小于等于 3 的元素前面, 或者是将能够被 3 整除的数放在不能被 3 整除的数后面。对于这种频繁变化的要求, 我们可以将判断条件独立成一个函数, 条件变化时, 只需更改判断函数即可。这种处理方式类似于 **React 中的高阶组件。**

```js
function reorderArray(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let head = 0;
    let tail = arr.length - 1;

    while (head < tail) {
        // 找到第一个偶数
        while (head < arr.length && isEven(arr[head])) {
            head++;
        }

        // 找到最后一个奇数
        while (tail >= 0 && !isEven(arr[tail])) {
            tail--;
        }

        if (head < tail) {
            [arr[head], arr[tail]] = [arr[tail], arr[head]];
        }
    }

    return arr;
}

function isEven(num) {
    return num & 0x1 !== 0;
}
```