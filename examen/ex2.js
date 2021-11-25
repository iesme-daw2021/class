import { DNI } from './ex1.js';

export function Directory() {
  this.directory = new Map();
  this.setPeople = (dni) => {
    const dniObject = new DNI(dni);
    this.directory.set(dni, dniObject);
  };
  this.getPeople = (dni) => {
    return this.directory.get(dni);
  };
}
