# 简介
实现一个函数, 用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样, 那么它就是对称的。

# 实现
逐层进行比较, 注意递归时比较的 root1 的左子树和 root2 的右子树, 以及 root1 的右子树和 root2 的左子树。

```js
function isSymmetricalBinaryTree(root1, root2 = root1) {
    // 两个树均为空, 返回 true
    if (root1 === null && root2 === null) {
        return true;
    }

    // 若其中一个树为空, 另一个树不为空, 则返回 false
    if (root1 === null || root2 === null) {
        return false;
    }

    // 两个树的值不相等, 返回 false
    if (root1.val !== root2.val) {
        return false;
    }

    return isSymmetricalBinaryTree(root1.left, root2.right) &&
        isSymmetricalBinaryTree(root1.right, root2.left);
}
```