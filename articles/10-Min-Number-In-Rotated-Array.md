# 简介
把一个数组最开始的若干个元素搬到数组末尾, 我们称之为`数组的旋转`。输入一个递增排序数组的一个旋转, 输出旋转数组的最小元素。

# 实现
看到排序数组和查找, 很自然的就应该想到二分查找。
设定两个指针, 前面的指针总是指向前半部分的递增数组, 后面的指针总是指向后半部分的递增数组。一般情况下, 前面指针所指的数字总是比后面指针所指的数字要大。
当两个指针只相差一时, 便找到了两个递增数组的分界点, 后面的指针指向的就是最小元素。
代码如下:
```js
function minNumberInRotatedArr(nums) {
    if (nums.length == 0) {
        throw new Error('Invalid Input!');
    } else if (nums.length == 1) {
        return nums[0];
    }

    let start = 0;
    let end = nums.length - 1;

    while (end - start > 1) {
        let mid = end + start >> 1;

        // 中间指针落在了后半部分的递增数组中
        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
        // 中间指针落在了前半部分的递增数组中
            start = mid;
        }
    }

    return nums[end];
}
```
上面的代码虽然能应对一般情况, 但是没有考虑另一个问题: **如果我们把 0 个元素从头部放到末尾, 这个数组也称得上是旋转数组。**
为了应对这种情况, 我们可以添加一次判断, 如果头部元素小于尾部元素, 则说明整个数组是排序的。头部元素即为最小元素, 可直接返回。
还有一种情况, **如果数组中头部、中间以及尾部的元素都相等时, 应该怎么办呢?** 这种情况下无法缩小范围, 因此只能遍历数组, 查找最小元素。
修改后的代码如下:

```js
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
```