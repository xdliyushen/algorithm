function minNumberInRotatedArr(nums) {
    if (nums.length == 0) {
        throw new Error('Invalid Input!');
    } else if (nums.length == 1) {
        return nums[0];
    }

    let start = 0;
    let end = nums.length - 1;
    let mid = (start + end) >> 1;

    // 数组为排序数组
    if (nums[start] < nums[end]) {
        return nums[start];
    }

    while (end - start > 1) {
        // 头部、中间、尾部三元素相等
        if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            let minNumber = nums[start];
            // 遍历剩下的范围, 查找最小元素
            for (let i = start + 1; i <= end; i++) {
                if (minNumber > nums[i]) {
                    minNumber = nums[i];
                }
            }
            return minNumber;
        }

        // 中间指针落在了后半部分的递增数组中
        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            // 中间指针落在了前半部分的递增数组中
            start = mid;
        }

        mid = (start + end) >> 1
    }

    return nums[end];
}