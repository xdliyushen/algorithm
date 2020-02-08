// 队列
function Queue() {
    // 队列长度
    Object.defineProperty(this, 'length', {
        get: function () {
            return this.stack1.length + this.stack2.length;
        }
    })
    
    this.stack1 = [];
    this.stack2 = [];

    // 向队列尾部添加元素
    this.appendTail = function (val) {
        this.stack1.push(val);
    }

    // 删除头部元素
    this.deleteHead = function () {
        if (this.length == 0) {
            throw new Error('Queue is empty!');
        }

        // 将 stack1 中的元素弹出, 依次放入 stack2 中
        // 注意此处有两重判断, 如果 stack2 非空时仍向内添加元素, 会导致弹出错误
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }
}

// 栈
function Stack() {
    // 栈长度
    Object.defineProperty(this, 'length', {
        get: function () {
            return this.queue1.length + this.queue2.length;
        }
    })

    this.queue1 = [];
    this.queue2 = [];

    // 向尾部添加元素
    this.appendTail = function (val) {
        if (this.queue2.length !== 0) {
            this.queue2.push(val);
        } else {
            this.queue1.push(val);
        }
    }

    // 删除尾部元素
    this.deleteTail = function () {
        if (this.length == 0) {
            throw new Error('Stack is empty!');
        }

        // 将非空队列中的元素弹出, 依次放入空队列中
        let fullQueue = this.queue2.length === 0 ? this.queue1 : this.queue2;
        let emptyQueue = this.queue2.length !== 0 ? this.queue1 : this.queue2;

        while (fullQueue.length > 1) {
            emptyQueue.push(fullQueue.shift());
        }

        return fullQueue.shift();
    }
}