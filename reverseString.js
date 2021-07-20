/* Task 2

Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
Write at least one test for this function. */

const reverseString = (string) => {
  const reverse = [...string].reverse();
  return reverse.join('');
};

module.exports = reverseString;
