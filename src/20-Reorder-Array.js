function reorderArray(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let head = 0;
    let tail = arr.length - 1;

    while (head < tail) {
        // 找到第一个偶数
        while (head < arr.length && isEven(arr[head])) {
            head++;
        }

        // 找到最后一个奇数
        while (tail >= 0 && !isEven(arr[tail])) {
            tail--;
        }

        if (head < tail) {
            [arr[head], arr[tail]] = [arr[tail], arr[head]];
        }
    }

    return arr;
}

function isEven(num) {
    return num & 0x1 !== 0;
}