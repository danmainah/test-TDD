const length = require('./index');


test('count length of a string', () => {
  expect(length('bad')).toBe(3);
});

