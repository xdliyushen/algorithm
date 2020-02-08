# 简介
给定二叉树的前序遍历与中序遍历的结果, 重建二叉树(结果中不含重复的数字)。

# 实现
如图, 前序遍历的顺序是 "中-左-右", 中序遍历的顺序是 "左-中-右"。

![二叉树的遍历](/images/06-01.jpg)

从图中可以得知, 前序遍历的第一个节点就是整个二叉树的根节点。找到根节点后, 便可以根据中序遍历的结果, 划分根节点的左右子树。之后, 再到前序遍历的结果中, 第二个值即为左子树的根节点。再根据中序遍历中得到的右子树的个数, 可以在前序遍历中找到右子树的根节点。
上述过程反复递归, 便能得到最终的结果。

```js
// 这种写法比较复杂, 好处是不适用额外的空间
function constructBinaryTree(preorder = [], inorder = [], startPreorder = 0, endPreorder = preorder.length, startInorder = 0, endInorder = inorder.length) {
    if (endPreorder - startPreorder == 0 || endInorder - startInorder == 0 || !preorder || !inorder) {
        return null;
    }

    let rootVal = preorder[startPreorder];
    // 根节点的值在中序遍历中的序号
    let rootIndex = inorder.indexOf(rootVal);

    let leftTreeLen = rootIndex - startInorder;
    // 划分前序遍历的界限
    let leftPreStart = startPreorder + 1;
    let rightPreStart = startPreorder + 1 + leftTreeLen;
    let leftPreEnd = leftPreStart + leftTreeLen;
    let rightPreEnd = endPreorder;

    // 划分中序遍历的界限
    let leftInStart = startInorder;
    let rightInStart = rootIndex + 1;
    let leftInEnd = startInorder + leftTreeLen;
    let rightInEnd = endInorder;

    let root = new BinaryTreeNode(rootVal);
    root.left = constructBinaryTree(preorder, inorder, leftPreStart, leftPreEnd, leftInStart, leftInEnd);
    root.right = constructBinaryTree(preorder, inorder, rightPreStart, rightPreEnd, rightInStart, rightInEnd);

    return root;
}
```
值得注意的是, **在这里不能使用栈来代替递归!** 因为这里有两次递归操作, 当只有一次递归操作时才能使用栈。
到这里我们已经基本实现功能了, 可是万一用户输入的前序遍历与中序遍历构不成二叉树怎么办? 这就需要进行进一步检测。归根结底, 有三类原因会导致无法构成二叉树。

1. 前序遍历长度和中序遍历长度不一致。
2. 序列顺序错误。
3. 序列中的元素不一致。

如果长度不一致的话, 可以直接在函数入口处判断。如果顺序错误的话或元素不一致的话, 则必然会出现在中序遍历序列中找不到元素的情况。因此我们可以对代码做如下改进:

```js
function constructBinaryTree(preorder = [], inorder = [], startPreorder = 0, endPreorder = preorder.length, startInorder = 0, endInorder = inorder.length) {
    // 序列长度不一致
    if(preorder.length !== inorder.length) {
        throw new Error('Invalid Input!');
    }

    if (endPreorder - startPreorder == 0 || endInorder - startInorder == 0 || !preorder || !inorder) {
        return null;
    }

    let rootVal = preorder[startPreorder];
    // 根节点的值在中序遍历中的序号
    let rootIndex = inorder.indexOf(rootVal);

    // 序列顺序错误 / 元素不一致
    if(rootIndex === -1 || rootIndex < startInorder || rootIndex >= endInorder) {
        throw new Error('Invalid Input!');
    }

    let leftTreeLen = rootIndex - startInorder;
    // 划分前序遍历的界限
    let leftPreStart = startPreorder + 1;
    let rightPreStart = startPreorder + 1 + leftTreeLen;
    let leftPreEnd = leftPreStart + leftTreeLen;
    let rightPreEnd = endPreorder;

    // 划分中序遍历的界限
    let leftInStart = startInorder;
    let rightInStart = rootIndex + 1;
    let leftInEnd = startInorder + leftTreeLen;
    let rightInEnd = endInorder;

    let root = new BinaryTreeNode(rootVal);
    root.left = constructBinaryTree(preorder, inorder, leftPreStart, leftPreEnd, leftInStart, leftInEnd);
    root.right = constructBinaryTree(preorder, inorder, rightPreStart, rightPreEnd, rightInStart, rightInEnd);

    return root;
}
```

# 附录
二叉树节点的构造函数如下:
```js
function BinaryTreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```