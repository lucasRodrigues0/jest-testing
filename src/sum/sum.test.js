const sum = require('./sum');

test('checks the type of the function', () => {
    expect(typeof(sum)).toBe('function');
})

test('adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
})

test('tests if both numbers are positive', () => {
    expect(sum(2, -2)).toBe('a and b sould be positive');
})

test('tests if the function returns an existing value', () => {
    expect(sum(1,3)).toBeTruthy();
})

test('testing if both values are numbers', () => {
    expect(() => {
        sum('1', 2)
    }).toThrow('both values must be numbers');
})

test('testing if zero is falsy', () => {
    expect(sum(0, 0)).toBeFalsy();
})