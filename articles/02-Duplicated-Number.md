# 简介
去除数组中的冗余元素是一道比较常见的面试题, 也有很多种做法。
在做题时, 需要格外注意额外给出的条件(比如数组元素为 0 - n, 或是只有一个多余元素等), 并充分利用这些条件。

# 实现
## 排序 + 遍历
首先想到的就是对数组进行排序, 遍历排序后的数组, 就可以很快找出重复的元素。
这里采用的是快排, 时间复杂度为 `O(nlgn)`。
空间复杂度理论上是可以为 `O(1)`的, 但是由于这里图方便使用了额外的数组, 因此空间复杂度为 `O(n)`。
```js
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
```

## 哈希表
另一种思路是使用哈希表。
应当注意的是, 这里的哈希表最好用 `Map` 来实现。因为数组元素的类型是不确定的, 使用对象来作为哈希表的话可能会出错。
这种解决方法的时间复杂度为 `O(n)`, 空间复杂度为 `O(n)`。

```js
// 哈希表
function duplicatedNumber(arr) {
    if (!arr || arr.length <= 1) {
        return [];
    }

    let hash = new Map();
    let ans = [];

    for (let number of arr) {
        if (hash.has(number)) {
            ans.push(number);
        } else {
            hash.set(number, number);
        }
    }

    return ans;
}
```