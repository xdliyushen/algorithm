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