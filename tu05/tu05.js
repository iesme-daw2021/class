function test() {
  console.log('test');
  // return null;
  // return NaN;
  return 1;
}

const result = test();
console.log('result = ' + result);
if (typeof result !== 'undefined') {
  console.log('result ok; not undefined');
}
if (result !== undefined) {
  console.log('result ok; not undefined');
}
if (result) {
  console.log('result ok; TRUE');
}
