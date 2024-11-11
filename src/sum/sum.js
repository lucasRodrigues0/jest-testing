function sum (a, b) {

        if(a < 0 || b < 0) {
            return 'a and b sould be positive';
        }
        if(typeof(a) !== 'number' || typeof(b) !== 'number') {
            throw new Error('both values must be numbers');
        };
    
        return a + b;

}

module.exports = sum;