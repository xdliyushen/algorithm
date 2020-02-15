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