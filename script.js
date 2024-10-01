function fibonacci(num) {
    // Handle edge cases
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    // Initialize the first two Fibonacci numbers
    let a = 0, b = 1;

    // Calculate Fibonacci numbers up to the given num
    for (let i = 2; i < num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}



module.exports = fibonacci;