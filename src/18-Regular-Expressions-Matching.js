function match(text, reg) {
    // 字符串和模式都为空
    if (!text && !reg) {
        return true;
    }

    // 模式第二个字符为 *
    if (reg[1] === '*') {
        // 字符串和模式第一个字符相等
        if (text[0] === reg[0]) {
            // 字符串向前移动一格, 模式向前移动两格 || 字符串向前移动一格, 模式不移动
            return  match(text.slice(1), reg.slice(2)) ||
                    match(text.slice(1), reg);
        } else if (reg[0] === '.') {
            // .* 可匹配所有字符
            return true;
        } else {
            // 当前模式不匹配当前字符串, 向前移动两格
            return match(text, reg.slice(2));
        }
    } else {
    // 模式第二个字符不为 *
        // 模式和第一个字符相匹配
        if (text[0] === reg[0] || reg[0] === '.') {
            return match(text.slice(1), reg.slice(1));
        } else {
            return false;
        }
    }
}