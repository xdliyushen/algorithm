// 正则
function replaceBlank(str) {
    return str.replace(/ /g, '%20')
}

// splice
function replaceBlank(str) {
    if (!str) {
        return str;
    }

    let strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            strArr.splice(i, 1, '%20');
            // strArr[i] = '%20';
        }
    }

    return strArr.join('');
}