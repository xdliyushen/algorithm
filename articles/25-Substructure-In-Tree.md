# 简介
输入两棵二叉树 A 和 B, 判断 B 是不是 A 的子结构。

# 实现
思路很简单, 主要应该注意的是递归的出口。
如果 B 树为空, 则其肯定是 A 树的子结构。
如果 A 树为空, 则 B 树肯定不是 A 树的子结构。

```js
function doesTree1HasTree2(root1, root2) {
    // B 树为空, 返回 true
    if (root2 === null) {
        return true;
    }

    // A 树为空, B 树不为空, 返回 false
    if (root1 === null) {
        return false;
    }

    // 找到 A 树和 B 树相等的根节点
    if (root1.val === root2.val) {
        // 判断 A 树和 B 树的子结构是否一致
        return doesTree1HasTree2(root1.left, root2.left) && doesTree1HasTree2(root1.right, root2.right);
    } else {
        // 若 A 树和 B 树值不一致, 则接着从 A 树向下寻找和 B 树根节点值一样的节点
        return doesTree1HasTree2(root1.left, root2) || doesTree1HasTree2(root1.right, root2);
    }
}
```