# 简介
设计一个函数, 判断一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵任意一格开始, 每一步可以向上、下、左、右移动一格。如果一条路径经过了矩阵的某一格, 那么该路径就不能再次进入该格子。

# 实现
这种题目可以用回溯法来实现。通常在二维数组上找路径这种题都可以用回溯法解决。
回溯法要注意的是要小心状态的改变以及状态改变的后要如何才能改回来。

```js
function stringPathInMatrix(str, matrix) {
    if (!str || !matrix || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }

    let matrixLength = matrix.length;
    let matrixRowLenght = matrix[0].length;
    // 构建访问记录矩阵
    let visited = [];
    for (let k = 0; k < matrixLength; k++) {
        visited.push((new Array(matrixRowLenght)).fill(false))
    }

    // 遍历矩阵
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixRowLenght; j++) {
            if (str[0] === matrix[i][j]) {
                if (matrixHasStringPath(str, matrix, visited, i, j)) {
                    return true;
                }
            }
        }
    }

    // 节省空间
    visited = null;

    return false;
}

function matrixHasStringPath(str, matrix, visited, row, column) {
    if (str.length == 0) {
        return true;
    }

    if (row < 0 || column < 0 || row >= matrix.length || column >= matrix[0].length ||
        matrix[row][column] != str[0] || visited[row][column]) {
        return false;
    }

    // 改变 visited 数组
    visited[row][column] = true;

    let hasPath = matrixHasStringPath(str.slice(1), matrix, visited, row + 1, column) ||
        matrixHasStringPath(str.slice(1), matrix, visited, row - 1, column) ||
        matrixHasStringPath(str.slice(1), matrix, visited, row, column + 1) ||
        matrixHasStringPath(str.slice(1), matrix, visited, row, column - 1);

    // 注意这里, 要让 visited 数组返回之前的状态
    visited[row][column] = false;

    return hasPath;
}
```