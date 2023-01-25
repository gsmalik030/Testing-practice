const stringReverse = require('./stringReverse');

test('abcde is equal to edcba', () => {
  expect(stringReverse('abcde')).toBe("edcba");
});

