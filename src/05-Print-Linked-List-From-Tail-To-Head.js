// 栈
function printListReversingly(head) {
    let stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    while (stack.length > 0) {
        console.log(stack.pop());
    }
}

// 递归
function printListReversingly(head) {
    if (head !== null) {
        printListReversingly(head.next);
        console.log(head.val);
    }
}