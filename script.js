function fibonacci(num) {
    if (num === 0) return 0; // Base case for num = 0
    if (num === 1) return 1; // Base case for num = 1

    let a = 0, b = 1;
    
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    
    return b;
}
module.exports = fibonacci;