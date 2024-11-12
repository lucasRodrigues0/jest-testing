const fetchData = require('./async');

test('data must be peanut butter', () => {
    return expect(fetchData(true)).resolves.toBe('peanut butter');
})

test('fetch failed', () => {
    return expect(fetchData(false)).rejects.toMatch('not peanut butter');
})

test('fetching data with async/await', async () => {
   const data = await fetchData(true);

   return expect(data).toBe('peanut butter');
})