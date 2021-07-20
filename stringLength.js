/* Task 1 */

const stringLength = (string) => {
  const len = string.length;

  if (len < 1) {
    throw new Error('string length is too short');
  } else if (len > 10) {
    throw new Error('string length is too high');
  }

  return string.length;
};

module.exports = stringLength;
