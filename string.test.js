const stringLength = require('./string');

test('abcde length to equal 5', () => {
  expect(stringLength('abcde')).toBe(5);
});

test('"" throw an error', () => {
  expect(stringLength('')).toBe("String can't be empty");
});

test('abcdefghijk length is more then 10', () => {
  expect(stringLength('abcdefghijk')).toBe("Length is more than 10");
});

