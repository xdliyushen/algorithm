# 简介
给定一个链表的头结点, 从尾到头反过来打印出每个节点的值。

# 实现
做题, 首先要搞明白这道题要考察什么。
很明显, 要想打印节点就必须遍历链表。可是要求是从尾到头打印, 遍历时的顺序是从头到尾, 因此我们需要一个 "先入后出" 的数据结构, 也就是**栈**。
明确了这一点后, 代码便很容易写出来了。

```js
function printListReversingly(head) {
    let stack = [];

    while(head) {
        stack.push(head.val);
        head = head.next;
    }

    while(stack.length > 0) {
        console.log(stack.pop());
    }
}
```

既然想到了栈, 而递归在本质上就是栈结构, 因此这个问题也可以用递归来解决。

```js
function printListReversingly(head) {
    if(head !== null) {
        printListReversingly(head.next);
        console.log(head.val);
    }
}
```
当链表长度很长时, 使用递归可能会造成堆栈溢出, 因此最好的解决方法是使用栈方法。

# 附录
js 中是没有链表的构造函数的, 因此我自己写了一个链表的构造函数。
```js
// 将多维数组转化为一维数组
function flatten(arr) {
    return arr.reduce(function(result, item) {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, [])
}

// 链表节点的构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 支持传入数组, 也支持传入一系列参数
function LinkedList(...args) {
    // 将参数数组扁平化
    args = flatten(args);

    let head = new ListNode();
    let p = head;

    for(let val of args) {
        head.next = new ListNode(val);
        head = head.next;
    }

    return p.next;
}

// LinkedList(1, 2, 3, 4, 5)
// LinkedList([1, 2, 3, 4, 5])
```