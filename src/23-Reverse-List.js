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