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