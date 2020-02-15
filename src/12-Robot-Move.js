function robotMove(k, rowLength, columnLength) {
    if (k < 0 || rowLength <= 0 || columnLength <= 0) {
        return 0;
    }

    // 构建访问记录数组
    let visited = [];
    for (let i = 0; i < rowLength; i++) {
        visited.push((new Array(columnLength)).fill(false));
    }

    // 释放空间
    visited = null;

    return robotMoveCore(k, visited, 0, 0);
}

// 返回能移动的格子数
function robotMoveCore(k, visited, row, column) {
    if (row < 0 || column < 0 || row >= visited.length || column >= visited[0].length || visited[row][column] || getDigitSum(row) + getDigitSum(column) > k) {
        return 0;
    }

    let count = 1;

    visited[row][column] = true;

    count += (robotMoveCore(k, visited, row - 1, column) +
        robotMoveCore(k, visited, row + 1, column) +
        robotMoveCore(k, visited, row, column - 1) +
        robotMoveCore(k, visited, row, column + 1));

    return count;
}

// 获取数字各位数之和
function getDigitSum(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.round(num / 10);
    }

    return sum;
}