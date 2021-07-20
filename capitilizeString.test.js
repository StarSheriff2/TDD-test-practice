const capitalize = require('./capitilizeString');

it('returns string with first letter capitalized', () => {
  expect(capitalize('string')).toBe('String');
})
