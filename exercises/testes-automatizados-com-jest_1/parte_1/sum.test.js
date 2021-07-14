const sum = require('./sum');

describe('The sum of', () => {

  test('2 plus 5 equals 7', () => {
    expect(sum(2, 5)).toBe(7);
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('throw an error if its a string', () => {
    expect(() => {
      sum(2, '5');
    }).toThrow();
  });

  test('throw an specific error message if its a string', () => {
    expect(() => {
      sum(2, '5');
    }).toThrow(/parameters must be numbers/);
  });


});
