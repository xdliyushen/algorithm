function mergeSortedLists(head1, head2) {
    // head1 或 head2 其中一个为空指针
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let p = new ListNode(null);
    let mergedListHead = p;

    while (head1 && head2) {
        // 将 p 的 next 指向较小的节点
        if (head1.val < head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }

        p = p.next;

        // 若 head1 或 head2 为空, 将 p 的 next 指向另一个链表剩下的节点
        if (!head1 || !head2) {
            p.next = !head1 ? head2 : head1;
            break;
        }
    }

    return mergedListHead.next;
}

// 链表节点的构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}