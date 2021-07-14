const myRemove = require('./remove');

describe('Test if my function', () => {

  test('Remove 3 from array and return new array that equals', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  test('Remove 3 from array and do not return the same array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Return the same array because do not have the item in the array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });

});