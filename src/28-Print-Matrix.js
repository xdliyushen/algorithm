function printMatrix(matrix) {
    // 矩阵为空
    if (!matrix || matrix.length === 0) {
        return;
    }

    // 矩阵四个角的限定范围
    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix[0].length;

    // 矩阵不为空
    printMatrixCore(matrix, top, bottom, left, right);
}

function printMatrixCore(matrix, top, bottom, left, right) {
    if (top > bottom || left > right) {
        return;
    }

    // 从左到右的横行
    if (right - left >= 1) {
        for (let i = left; i < right; i++) {
            console.log(matrix[top][i]);
        }
    }

    // 从上到下的竖行
    if (bottom - top > 1) {
        for (let i = top + 1; i < bottom; i++) {
            console.log(matrix[i][right - 1]);
        }
    }

    // 从右到左的横行
    if (right - left > 1 && bottom - top > 1) {
        for (let i = right - 2; i >= left; i--) {
            console.log(matrix[bottom - 1][i]);
        }
    }

    // 从下到上的竖行
    if (bottom - top > 1 && right - left > 1) {
        for (let i = bottom - 2; i > top; i--) {
            console.log(matrix[i][left]);
        }
    }

    printMatrixCore(matrix, top + 1, bottom - 1, left + 1, right - 1);
}