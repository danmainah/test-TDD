const reverse = require('./reverse');

test ('check if the string is reversed', () => {
    expect(reverse('bad')).toBe('dab')
  });