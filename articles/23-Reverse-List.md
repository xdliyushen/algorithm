# 简介
定义一个函数, 输入一个链表的头结点, 反转该链表并输出反转后链表的头结点。

# 实现
要完成链表的反转, 共需要三个指针, 一个指针指向当前节点, 一个指针指向上一个节点, 一个指针指向下一个节点。
要注意的是, 在改变当前节点 next 的指向前要先保存下一个节点, 不然会由于链表的断开而无法进行下一步操作。
```js
function reverseList(head) {
    if (!head) {
        return null;
    }

    let current = head;
    let prev = null;

    while (current) {
        // 保存下一个节点
        let next = current.next;

        // 改变当前节点 next 的指向
        current.next = prev;

        // 移动 current 和 prev
        prev = current;
        current = next;
    }

    return prev;
}
```