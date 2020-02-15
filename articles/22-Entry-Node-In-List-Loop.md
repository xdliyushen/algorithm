# 简介
如果一个链表中包含环, 如何找出环的入口节点?

# 实现
第一步要确定链表中是否存在环。具体方法是使用快慢指针, 快指针每次移动两步, 慢指针每次移动一步。如果两个指针相遇, 则说明链表中存在环。**且慢指针从开始移动到相遇移动的次数便是环的节点个数。**
知道了环的节点个数后, 便可以开始找环的入口节点。假设环中节点个数为 n, 使用两个指针, 让前面的指针先移动 n 步, 之后两个指针一起移动。两个指针相遇的节点便是环的入口节点。

```js
function entryNodeInListLoop(head) {
    if (!head) {
        return null;
    }

    let loopNodeNumber = countLoopNodeNumber(head);

    // 链表中不存在环
    if (loopNodeNumber === 0) {
        return null;
    } else {
        let prev = head;
        let next = head;

        // 移动前一个指针
        while (loopNodeNumber > 0) {
            prev = prev.next;
            loopNodeNumber--;
        }

        // 找到环的入口节点
        while (prev !== next) {
            prev = prev.next;
            next = next.next;
        }

        return next;
    }
}

// 计算环中节点个数
function countLoopNodeNumber(head) {
    // 链表中只有一个节点且包含环
    if (head.next === head) {
        return 1;
    }

    let quick = head;
    let slow = head;
    let count = 0;

    // quick 不等于 slow
    while (quick == head || quick !== slow) {
        quick = quick.next;;
        slow = slow.next;

        // quick 不为空
        if (quick) {
            quick = quick.next;
            count++;
        } else {
            count = 0;
            break;
        }
    }

    return count;
}
```