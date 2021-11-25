import { DNI } from './ex1.js';
import { Directory } from './ex2.js';

const TODAY = 'Tuesday, 23-November-2021';

it('Valid dni - letter with uppercase', () => {
  const DNIObject = new DNI('123456789-A');
  expect(DNIObject.dni).toBe('123456789A');
});
it('Valid dni - letter with lowercase', () => {
  const DNIObject = new DNI('123456789-a');
  expect(DNIObject.dni).toBe('123456789A');
});
it('Invalid dni - Ending with number', () => {
  const DNIObject = new DNI('123456789-1');
  expect(DNIObject.dni).toBe('123456789B');
});
it('Invalid dni - Ending with symbol', () => {
  const DNIObject = new DNI('123456789-%');
  expect(DNIObject.dni).toBe('123456789B');
});
it('Invalid dni - Without dash', () => {
  const DNIObject = new DNI('123456789A');
  expect(DNIObject.dni).toBe('123456789B');
});
it('Invalid dni - With more than one letter at then end', () => {
  const DNIObject = new DNI('123456789-AA');
  expect(DNIObject.dni).toBe('123456789B');
});
it('Invalid dni - With less than 9 numbers', () => {
  const DNIObject = new DNI('12345678-A');
  expect(DNIObject.dni).toBe('123456789B');
});
it('Invalid dni - 9 chars, but one is a letter', () => {
  const DNIObject = new DNI('12345B789-A');
  expect(DNIObject.dni).toBe('123456789B');
});

it('Invalid dni - 9 chars, but one is a letter', () => {
  const DNIObject = new DNI('123456789-A');
  const myfunction = (str) => {
    console.log(str);
  };
  expect(DNIObject.formatAndDisplay(myfunction)).toBe(TODAY + ' - 123456789A');
});

it('set several dnis and get the last one', () => {
  const directory = new Directory();
  directory.setPeople('123456789-A');
  directory.setPeople('123456780-B');
  directory.setPeople('123456781-C');
  directory.setPeople('123456782-D');

  expect(directory.getPeople('123456782-D').dni).toBe('123456782D');
});

it('set several dnis and get one new', () => {
  const directory = new Directory();
  directory.setPeople('123456789-A');
  directory.setPeople('123456780-B');
  directory.setPeople('123456781-C');
  directory.setPeople('123456782-D');

  expect(directory.getPeople('123456783-E')).toBeUndefined();
});
