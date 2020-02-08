# 简介
给定一个二叉树其中的一个节点, 要求找出中序遍历序列的下一个节点。**注意, 树中的节点除了有两个分别指向左右子节点的指针外, 还有一个指向父节点的指针。**

# 实现
首先我们要分条件来讨论。
当给定节点有右子树时, 该二叉树中序遍历的下一个节点应是右子树的最左节点。
当给定节点没有右子树, 且该节点是其父节点的左节点时, 中序遍历的下一个节点应该是其父节点。
当给定节点没有右子树, 且该节点不是其父节点的左节点时, 应该向上查找满足如下条件的祖先节点: 该祖先节点是其父节点的左节点, 此时中序遍历的下一个节点为满足条件的祖先节点的父节点。
代码实现如下:
```js
function getNextNodeInBinaryTree(node) {
    if(!node) {
        return null;
    }

    let pNextNode = null;

    // 当前节点有右子树
    if(node.right !== null) {
        pRight = node.right;

        while(pRight.left !== null) {
            pRight = pRight.left;
        }

        pNextNode = pRight;
    // 当前节点没有右子树
    } else if(node.parent !== null) {
        let pCurrent = node;
        let pParent = node.parent;

        while(pParent !== null && pParent.left !== pCurrent) {
            pCurrent = pParent;
            pParent = pParent.parent;
        }

        pNextNode = pParent;
    }

    return pNextNode;
}
```
