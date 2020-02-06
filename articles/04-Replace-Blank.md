# 简介
构造一个函数, 将给定字符串中的所有空格替换为 `%20`。
这种替换操作对于 js 这种不需要手动进行内存空间管理的语言来说还是十分简单的。

# 实现
第一种实现是用正则表达式。
```js
function replaceBlank(str) {
    return str.replace(/ /g, '%20')
}
```

第二种实现方法是先将字符串转为数组, 再扫描数组, 遇到空格就用 `splice` 方法进行替换, 最后将数组的所有值拼接起来。
值得注意的是, `splice` 方法是数组实例方法, 字符串上并不能直接调用。
```js
function replaceBlank(str) {
    if(!str) {
        return str;
    }

    let strArr = str.split('');

    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === ' ') {
            strArr.splice(i, 1, '%20');
            // strArr[i] = '%20';
        }
    }

    return strArr.join('');
}
```