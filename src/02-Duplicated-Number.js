// 快排
function duplicatedNumber(arr) {
    if (!arr || arr.length <= 1) {
        return [];
    }

    let ans = [];
    let quickSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        let left = [];
        let right = [];
        let mid = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return quickSort(left).concat([mid], quickSort(right));
    }

    // 对原数组进行排序
    arr = quickSort(arr);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) {
            ans.push(arr[i]);
        }
    }

    return ans;
}

// 哈希表
function duplicatedNumber(arr) {
    if (!arr || arr.length <= 1) {
        return [];
    }

    let hash = new Map();
    let ans = [];

    for (let number of arr) {
        if (hash[number]) {
            ans.push(number);
        } else {
            hash.set(number, number);
        }
    }

    return ans;
}