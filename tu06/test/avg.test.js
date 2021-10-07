import { avg } from '../docs/avg.js';

describe('AVG Test Suite', () => {
  test('that the avg function works as expected', () => {
    // Input definition
    const num1 = 50;
    const num2 = 40;

    // Expected output
    const output = 45;

    // Assert the result
    expect(avg(num1, num2)).toEqual(output);
  });

  it('returns null when NaN', () => {
    expect(avg(8, 'A')).toBeNull();
  });

  it('calculates the avg correctly', () => {
    expect(avg(8, 10)).toBeGreaterThan(8);
  });

  // it('calculates the avg using negative numbers', () => {
  //   // AQUI VA EL BODY DE LA FUNCION FLECHA
  // });

  // test('Zero avgs', () => {
  //   // AQUI VA EL BODY DE LA FUNCION FLECHA
  // });
});
