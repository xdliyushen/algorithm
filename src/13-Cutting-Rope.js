function cuttingRope(ropeLength) {
    if (ropeLength < 2) {
        return 0;
    } else if (ropeLength == 2) {
        return 1;
    } else if (ropeLength == 3) {
        return 2;
    }

    // 注意这里!!
    let products = [0, 1, 2, 3];
    let max = 0;

    for (let i = 4; i <= ropeLength; i++) {
        let max = 0;

        // 为了求解 f(i), 找出所有可能的 f(i) * f(n - i), 取最大值
        for (let j = 1; j <= i / 2; j++) {
            if (products[j] * products[i - j] > max) {
                max = products[j] * products[i - j]
            }
        }

        products[i] = max;
    }

    max = products.pop();
    // 释放内存
    products = null;

    return max;
}

function cuttingRope(ropeLength) {
    if (ropeLength < 2) {
        return 0;
    } else if (ropeLength == 2) {
        return 1;
    } else if (ropeLength == 3) {
        return 2;
    }

    // 尽可能多地剪长度为 3 的绳子
    let timesOf3 = Math.floor(ropeLength / 3);

    // 当最后剩下的绳子长度为 4 时, 不要再去剪长度为 3 的绳子了
    if (ropeLength - 3 * timesOf3 === 1) {
        timesOf3--;
    }

    let timesOf2 = (ropeLength - 3 * timesOf3) / 2;

    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}