/* Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
Write at least 3 tests for each of the calculator methods.
Group tests for each method using describe() method. */

class Calculator {
  add(x = 0, y = 0) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return x / y;
  }

  multiply(x, y, ...rest) {
    if (rest.length > 0) {
      const initial = [x * y, ...rest];
      return initial.reduce((product, multiple) => product * multiple);
    }

    return x * y;
  }
}

module.exports = new Calculator;
