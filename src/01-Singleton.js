// 一般单例模式
let Singleton = (function () {
    function createSingleton() {
        // ...
    }

    let instance = new createSingleton();

    return function () {
        return instance;
    }
})();

// 惰性单例模式
let Singleton = (function () {
    function createSingleton(arg1, arg2) {
        // ...
    }

    let instance = null;

    return function (...args) {
        if (!instance) {
            instance = new createSingleton(...args)
        }

        return instance;
    }
})();