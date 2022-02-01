import hello from './export-only-one.js';

import { VAT, PI, MONTHS, DAYS } from './export';
console.log(PI);

import * as CONSTANTS from './export';
console.log(CONSTANTS.PI);

// import { VAT } from './export';
// import { PI } from './export';
// import { MONTHS } from './export';

console.log('Hello world');
console.log(3 + 4);
