function getNextNodeInBinaryTree(node) {
    if (!node) {
        return null;
    }

    let pNextNode = null;

    // 当前节点有右子树
    if (node.right !== null) {
        pRight = node.right;

        while (pRight.left !== null) {
            pRight = pRight.left;
        }

        pNextNode = pRight;
    // 当前节点没有右子树
    } else if (node.parent !== null) {
        let pCurrent = node;
        let pParent = node.parent;

        while (pParent !== null && pParent.left !== pCurrent) {
            pCurrent = pParent;
            pParent = pParent.parent;
        }

        pNextNode = pParent;
    }

    return pNextNode;
}