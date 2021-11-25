import { DEFAULT_DNI } from './config.js';

export function DNI(dni) {
  this.dni = getValidDni(dni);
  this.formatAndDisplay = (
    clb = (str) => {
      console.info(str);
    }
  ) => {
    const now = new Date();
    const weekDay = now.toLocaleDateString('en-GB', { weekday: 'long' });
    const month = now.toLocaleDateString('en-GB', { month: 'long' });
    const outputStr = `${weekDay}, ${now.getDate()}-${month}-${now.getFullYear()} - ${
      this.dni
    }`;

    clb(outputStr);

    return outputStr;
  };
}

function getValidDni(dni) {
  const [num, letter] = dni.split('-');
  let validDni;
  if (num && letter) {
    const letterUppercase = letter.toUpperCase();
    const numOk = parseInt(num);
    const numOkStr = numOk + '';

    validDni =
      numOkStr.length === 9 &&
      numOk !== NaN &&
      letterUppercase.length === 1 &&
      letterUppercase >= 'A' &&
      letterUppercase <= 'Z'
        ? num + letterUppercase
        : DEFAULT_DNI;
  }

  return validDni ?? DEFAULT_DNI;
}
