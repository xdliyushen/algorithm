# 简介
定义栈的数据结构, 在该类型中实现一个能够得到栈的最小元素的 min 函数。在该类型中, 调用 min、pop 和 push 的时间复杂度都是 O(1)。

# 实现
我们最先想到的, 是在类定义中添加一个 min 属性, 用于保存最小元素。当新元素进来时, 与原有最小元素进行比较并更新 min 的属性值。但这种方法有一个缺点: 那就是当执行弹出操作后, min 属性保存的最小值便不再可靠了。有可能将最小元素弹出, 此时我们便需要再次在剩余元素中寻找最小元素, 这肯定是不满足 O(1) 的时间要求的。
从上面的分析可以看到, 只保存一个最小值是不够的, 还要保存次小值。因此, 我们需要用到辅助栈。辅助栈用于保存最小值, 辅助栈长度和栈中数据长度一样。**当有新元素进来时, 比较新元素和辅助栈栈顶的大小, 将较小的那个压入栈中。当执行弹出操作时, 辅助栈也执行弹出操作, 这是辅助栈的栈顶元素依然是剩余元素的最小值。**
实现如下:

```js
function Stack() {
    this.stack = [];
    // 辅助栈
    this.minStack = [];

    this.push = function (val) {
        this.stack.push(val);

        // 若辅助栈长度为 0, 送入新元素
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            // 比较新元素和原有最小元素的大小, 将更小的元素送入辅助栈中
            let currentMin = this.minStack[this.minStack.length - 1];

            if (val < currentMin) {
                this.minStack.push(val);
            } else {
                this.minStack.push(currentMin)
            }
        }
    }

    this.pop = function () {
        // 保持辅助栈和栈中数据一致
        this.minStack.pop();
        return this.stack.pop();
    }

    this.min = function () {
        // 返回辅助栈的栈顶元素
        return this.minStack[this.minStack.length - 1]
    }
}
```
