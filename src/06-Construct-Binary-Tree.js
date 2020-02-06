// 递归
function constructBinaryTree(preorder = [], inorder = [], startPreorder = 0, endPreorder = preorder.length, startInorder = 0, endInorder = inorder.length) {
    if (endPreorder - startPreorder == 0 || endInorder - startInorder == 0 || !preorder || !inorder) {
        return null;
    }

    // 根节点的值
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

// 加上输入检测
function constructBinaryTree(preorder = [], inorder = [], startPreorder = 0, endPreorder = preorder.length, startInorder = 0, endInorder = inorder.length) {
    // 序列长度不一致
    if (preorder.length !== inorder.length) {
        throw new Error('Invalid Input!');
    }

    if (endPreorder - startPreorder == 0 || endInorder - startInorder == 0 || !preorder || !inorder) {
        return null;
    }

    let rootVal = preorder[startPreorder];
    // 根节点的值在中序遍历中的序号
    let rootIndex = inorder.indexOf(rootVal);

    // 序列顺序错误 / 元素不一致
    if (rootIndex === -1 || rootIndex < startInorder || rootIndex >= endInorder) {
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