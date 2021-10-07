export default function isIMC(weight, size) {
  const imc = weight / size ** 2;
  return imc && imc < 25;
}
