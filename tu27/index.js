/**
 *
 * @param {*} num is a Integer
 * @param {*} validator is a function
 * @returns true if the number is correct
 */
function validate(num, validator) {
  console.log('Wasting my time');
  validator(num);
  return true;
}

try {
  validate(23, () => {
    console.log('validator');
    noExiste;
  });
} catch (error) {
  console.error('Xavi i Victor guanyen');
  console.error(error.name);
  console.error(error.message);
}
console.log('FINAL');
