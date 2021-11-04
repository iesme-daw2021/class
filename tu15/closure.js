function makeCounter() {
  let cont = 1;

  return function () {
    return cont++;
  };
}

const contador = makeCounter();
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
