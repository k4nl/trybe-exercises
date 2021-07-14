const myRemoveWithoutCopy = require('./remove-without-copy');

describe('Test if my function', () => {

  test('Remove 3 from array and return the expected array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });  

  test('Remove 3 from array and verify if the array changes.', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual(array);
  });

  test('Remove 3 from array and do not return previous array.', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Remove 3 from array and return the expected array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  });  

});
