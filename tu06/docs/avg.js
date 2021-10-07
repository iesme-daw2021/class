export function avg(num1, num2) {
  if (isNaN(+num1) || isNaN(+num2)) {
    return null;
  }
  return (num1 + num2) / 2;
}
