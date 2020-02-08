# 简介
用两个栈来实现队列。队列的声明如下: 它需要包含一个 `appendTail` 方法和 `deleteHead` 方法, 分别用于向队列尾部添加节点和删除队列头部的节点。

# 实现
首先我们要明确`栈(stack)`与`队列(queue)`的区别: 栈是**先入后出**, 队列是**先入先出**。
用 js 中的 API 翻译一下, **就是当添加元素时, 栈和队列都只能用 `push`, 删除元素时, 栈只能用 `pop`, 而队列只能用 `shift`。**
接下来我们来看 `appendTail` 方法的实现, 这个方法会向队列尾部添加数据, 我们可以用其中一个栈(称为 `stack1`)来存储这些数据, 调用此方法, 会把数据放入 stack1 中。
再然后我们来看看 `deleteHead` 的实现, 我们已经用 stack1 来存储数据了, 此时要删除数据, 但是数据在栈底, 应该怎么做呢? 很简单, 将 stack1 中的数据全部依次弹出, 并将其按顺序放入 stack2 中, 此时 stack1 栈底的数据便会跑到 stack2 的栈顶, 此时我们只要弹出 stack2 的栈顶就行了。
下面是实现方法:

```js
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
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

        return stack2.pop();
    }
}
```

# 相关题目
另一道相关题目是: 用两个队列来实现栈。
思路与之前不太一样, 两个栈通过来回倒换其中的元素, 可以把原来的栈底元素倒换到另一个栈的栈顶。但队列不行, 无论怎么倒换, 两个队列中元素的顺序总是一致的, 因此我们需要换个思路。
当添加元素时, 总是向非空的队列(假设为 `queue1`)添加元素。
当删除元素时, 需要把 queue1 中的元素放入 queue2 中, 直到只剩下一个元素为止, 将这个元素弹出即可。此时, queue1 为空队列, queue2 为非空队列。
下次添加元素时, 由于 queue1 为空队列, 而queue2 为非空队列, 因此需要把元素加入 queue2 中。
```js
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
        if(this.queue2.length !== 0) {
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
```