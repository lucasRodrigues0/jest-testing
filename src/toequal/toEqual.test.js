test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('comparing arrays', () => {
    const arr1 = [1,2,3];
    const arr2 = [1,2,2];

    expect(arr1).not.toEqual(arr2);
})

test('concatenating arrays', () => {
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    expect(arr1.concat(arr2)).toEqual([1,2,3,4,5,6]);
})