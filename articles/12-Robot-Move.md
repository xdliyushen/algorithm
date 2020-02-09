# 简介
地上有 m * n 个空格, 一个机器人从 (0, 0) 出发, 一次只能向上、下、左、右移动一格, 但不能进入行坐标和列坐标数位之和大于 k 的格子。比如 k 为 18, 机器人能进入 (35, 37), 因为 3 + 5 + 3 + 7 = 18, 但不能进入 (35, 38), 因为 3 + 5 + 3 + 7 = 19 > 18。
给定 m、n、k, 请问机器人能到达多少格子?

# 实现
这道题和之前的[查找矩阵中的路径](./11-String-Path-In-Matrix.md)差不多, 也可以直接用回溯法解决。
**其实不能称得上是完整的回溯法, 因为整个算法中, 并没有回溯的过程。**

```js
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
```