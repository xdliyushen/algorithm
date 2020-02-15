// 递归
function mirrorRecursively(root) {
    if (!root) {
        return root;
    }

    // 交换左右子树
    [root.left, root.right] = [root.right, root.left];

    // 递归交换左子树的节点
    mirrorRecursively(root.left);
    // 递归交换右子树的节点
    mirrorRecursively(root.right);

    return root;
}

// 队列
function mirrorRecursively(root) {
    if (!root) {
        return root;
    }

    let queue = [root];

    while (queue.length > 0) {
        // 从头部取出需要进行下一步交换的树
        let node = queue.shift();

        // 如果树的左子树不为空, 将其加入到队列中
        if (node.left !== null) {
            queue.push(node.left);
        }

        // 如果树的右子树不为空, 将其加入到队列中
        if (node.right !== null) {
            queue.push(node.right);
        }

        // 交换左右子树
        [node.left, node.right] = [node.right, node.left];
    }

    return root;
}