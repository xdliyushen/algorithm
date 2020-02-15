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