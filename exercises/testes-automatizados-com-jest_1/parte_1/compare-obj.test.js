const { obj1, obj2, obj3 } = require('./compare-obj');

describe('Test if my function', () => {

  test('check if the obj1 and obj2 are equals', () => {
    expect(obj1).toMatchObject(obj2);
  });

  test('check if the values of obj1 and obj2 are equals', () => {
    expect(obj1).toEqual(obj2);
  });

  test('check if the obj2 and obj3 are not equals', () => {
    expect(obj2).not.toMatchObject(obj3);
  });

  test('check if the values of obj2 and obj3 are not equals', () => {
    expect(obj2).not.toBe(obj3);
  });

  test("Não deveria passar!", () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
    }, 500);
  });

});
