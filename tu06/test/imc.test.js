import isIMC from '../docs/imc';

describe('IMC Test Suite', () => {
  it('returns false for 70Kg and 1.60m', () => {
    expect(isIMC(70, 1.6)).toBeFalsy();
  });
  it('returns true for 70Kg and 1.80m', () => {
    expect(isIMC(70, 1.8)).toBeTruthy();
  });
  it('returns NaN for undefined and 1.80m', () => {
    expect(isIMC(undefined, 1.8)).toBeNaN();
  });
  it('returns NaN for 70Kg and undefined', () => {
    expect(isIMC(70, undefined)).toBeNaN();
  });
  it('returns NaN for null and undefined', () => {
    expect(isIMC(null, undefined)).toBeNaN();
  });
  it('returns NaN for null and NaN', () => {
    expect(isIMC(null, NaN)).toBeNaN();
  });
  it('returns NaN for NaN and NaN', () => {
    expect(isIMC(NaN, NaN)).toBeNaN();
  });
});
