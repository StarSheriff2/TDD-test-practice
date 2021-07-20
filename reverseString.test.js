const stringLength = require('./reverseString');

it('Count', () =>{
  expect(stringLength('string')).toBe(6)
})

it('should throw error if string is too high', () =>{
  expect(() => stringLength('this string is too high')).toThrow('string length is too high');
})

it('should throw error if string is too short', () =>{
  expect(() => stringLength('')).toThrow('string length is too short');
})
