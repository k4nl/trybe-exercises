const myFizzBuzz = require('./fizz-buzz');

describe('Test if my function', () => {

  test('It returns "fizzbuzz" if number is divisible by 3 and 5.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });  

  test('It returns "fizz" if number is divisible by 3.', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });  

  test('It returns "fizzbuzz" if number is divisible by 5.', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });  

  test('It returns number if number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });  

  test('It returns false if parameter is not a number type', () => {
    expect(myFizzBuzz('xablau')).toBe(false);
  });  

});  