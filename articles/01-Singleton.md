# 简介
`单例模式(Singleton)`, 也叫`单子模式`, 是一种常用的软件设计模式。在应用这个模式时, 单例对象的类必须保证只有一个实例存在。比如浏览器中的 document 对象和 window 对象。

# 实现
## 一般的单例模式
一般的单例模式就是符合上述要求即可。思路是使用闭包, 在闭包内创建实例并保存, 每次调用时都返回同一个实例。实现如下:
```js
let Singleton = (function () {
    function createSingleton() {
        // ...
    }

    let instance = new createSingleton();

    return function() {
        return instance;
    }
})()
```

## 惰性单例模式
一般的单例模式虽然可以实现基本功能, 但有两点缺陷: 
1. 创建实例时不可以传入参数。
2. 实例不能按需创建, 浪费内存空间。
惰性单例模式和一般的单例模式不同。惰性单例模式是只有在需要的时候, 才会创建实例。实现如下:
```js
let Singleton = (function () {
    function createSingleton(arg1, arg2) {
        // ...
    }

    let instance = null;

    return function(...args) {
        if(!instance) {
            instance = new createSingleton(...args);
        }
        return instance;
    }
})()
```