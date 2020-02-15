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