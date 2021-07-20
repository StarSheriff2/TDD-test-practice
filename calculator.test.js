const Calculator = require("./calculator")

describe('Calculator', () => {
  describe('add', () => {
    test('add works', () => {
      expect(Calculator.add()).toBeFalsy();
    });

    test('add returns 4', () => {
      expect(Calculator.add(2, 2)).toEqual(4);
    });

    test('add returns 0 when no input given', () => {
      expect(Calculator.add()).toEqual(0);
    });
  })

  describe('subtract', () => {
    test('subtract works', () => {
      expect(Calculator.add()).toBeFalsy();
    });

    test('subtracts 2 from 4', () => {
      expect(Calculator.subtract(4, 2)).toEqual(2);
    });

    test('subtract returns negative number', () => {
      expect(Calculator.subtract(2, 4)).toEqual(-2);
    })
  })

  describe('divide', () => {
    test('returns quotient', () => {
      expect(Calculator.divide(4, 2)).toEqual(2);
    });

    test('returns error when divisor is zero', () => {
      expect(Calculator.divide(4, 0)).toEqual(Infinity);
    });

    test('returns error when divisor is zero', () => {
      expect(Calculator.divide(4, 4)).toEqual(1);
    });
  })

  describe('multiply', () => {
    test('works', () => {
      expect(Calculator.multiply())
    });

    test('multiplies to numbers successfully', () => {
      expect(Calculator.multiply(2, 2)).toEqual(4);
    })

    test('multiplies more than one number', () => {
      expect(Calculator.multiply(2, 2, 2, 2)).toEqual(16);
    })

  })

});
