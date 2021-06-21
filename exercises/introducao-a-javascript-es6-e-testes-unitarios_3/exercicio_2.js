const assert = require('assert');
const { type } = require('os');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // usar o deep para comparar o que está dentro do objeto ou dentro do array.
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const list = [11, 22, 33, 44, 55, 66];
myRemove(list, 5);
assert.deepStrictEqual(list, [11, 22, 33, 44, 55, 66]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
