# 简介
有一个已经排序好的二维数组, 给定某个数字, 判断该数字是否在数组中。

# 实现
最简单的方法就是全部遍历, 显然这种方法并不是最好的。既然是排序好的数组, 就应该想办法缩小查找的范围。
我们可以将矩阵的一个角上的数字来和目标进行比较, 根据比较的结果来缩小需要查找的范围。
以右上角为例。

```js
function matrixFind(matrix, target) {
    if (!matrix || matrix.length == 0) {
        return false;
    }

    // row 的下边和 column 的左边便是需要查找的范围
    let row = 0;
    let column = matrix[0].length - 1;
    
    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] === target) {
            return true;
        } else if (matrix[row][column] > target) {
            // 右上角数字比目标大, 目标只可能存在于当前列的左边
            column--;
        } else {
            // 右上角数字比目标小, 目标只可能存在于当前行的下边
            row++;
        }
    }

    return false;
}
```

在上述过程中, 我们先逐渐缩小列的范围, 之后再缩小行的范围。以此来查找目标元素。
也可以选取左下角的元素, 但是**不能选取左上角以及右下角的元素!** 当选取这两个角时, 如果目标元素比矩阵中所有元素都大或所有元素都小时, 无法缩小范围。