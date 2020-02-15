function Fibonacci(n) {
    if (n < 0) {
        throw new Error('Invalid Input!')
    } else if (n <= 1) {
        return n;
    }

    let fibMinusTwo = 0;
    let fibMinusOne = 1;
    let fibN = 0;

    while (n > 1) {
        fibN = fibMinusOne + fibMinusTwo;
        fibMinusTwo = fibMinusOne;
        fibMinusOne = fibN;

        n--;
    }

    return fibN;
}