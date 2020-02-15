// 删除指定节点
function deleteNode(head, pToBeDeleted) {
    // 头结点为空节点或要删除的节点为空节点
    if (!head || !pToBeDeleted) {
        return head;
    }

    // 要删除的节点是头结点
    if (pToBeDeleted === head) {
        return head.next;
    }

    // 一般情况
    let pParent = head;
    let p = head.next;

    while (p) {
        if (p === pToBeDeleted) {
            pParent.next = p.next;
            break;
        }
        pParent = p;
        p = p.next;
    }

    return head;
}

// 删除指定节点
function deleteNode(head, pToBeDeleted) {
    // 头结点为空或要删除的节点为空
    if (!head || !pToBeDeleted) {
        return head;
    }

    // 要删除的节点是头结点
    if (head === pToBeDeleted) {
        return head.next;
    }


    let p = head;

    while (p) {
        if (p === pToBeDeleted) {
            // 要删除的节点是尾结点
            if (p.next === null) {
                let pParent = head;

                // 找出被删除节点的父节点
                while (pParent.next !== p) {
                    pParent = pParent.next;
                }

                pParent.next = null;
            } else {
                p.val = p.next.val;
                p.next = p.next.next;
            }

            break;
        }

        p = p.next;
    }

    return head;
}

// 删除重复节点
function deleteRepeatNode(head) {
    // 链表为空或只有一个节点
    if (!head || !head.next) {
        return head;
    }

    let p = head;

    // 一般情况
    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next;
            continue;
        }

        p = p.next;
    }

    return head;
}