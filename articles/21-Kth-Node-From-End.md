# 简介
输入一个链表, 输出该链表倒数第 K 个节点(从 1 开始计数)。

# 实现
要注意的是输入的合法性。
由于是从 1 开始计数的, 所以当输入的 K 小于 1 时没有意义, 可以返回 `null`。
另一种非法的输入是当 K 大于链表中的节点数时, 也返回 `null`。
本题可以用双指针法, 第一个指针先出发, 移动 k - 1 步。之后两个指针同时移动, 当第一个指针到达链表末尾时, 第二个指针指向的就是倒数第 K 个节点。

```js
function kthNodeFormEnd(head, k) {
    if (!head || k <= 0) {
        return null;
    }

    let prev = head;
    let next = head;

    // 移动第一个指针
    while (k > 0) {
        // k 大于链表中节点数目时
        if (!prev) {
            return null;
        }

        prev = prev.next;
        k--;
    }

    // 移动两个指针, 找出最后倒数第 k 个节点
    while (prev) {
        prev = prev.next;
        next = next.next;
    }

    return next;
}
```

# 相关题目
求链表的中间节点。当节点数为奇数时, 返回中间的节点。当节点数为偶数时, 返回中间两个节点中的任意一个。可以用**快慢指针法**来解决。