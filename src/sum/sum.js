function sum (a, b) {
    if(a < 0 || b < 0) {
        return 'a and b sould be positive';
    }
    return a + b;
}

module.exports = sum;