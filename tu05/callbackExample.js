function showResult(message, maxAge) {
  console.info(message);
  console.info(`An old person usually is ${maxAge} years old`);
}

let isOldPerson = function (age, show) {
  const OLD_AGE = 65;
  if (age > OLD_AGE) {
    show('This person is old', OLD_AGE);
    return true;
  } else {
    show('This person is not old', OLD_AGE);
    return true;
  }
};

isOldPerson(50, showResult);
