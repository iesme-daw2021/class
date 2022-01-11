try {
  setTimeout(() => {
    console.log('validator');
    noExiste;
  }, 3000);
} catch (noSeComCridarte) {
  console.error('No es veu mai');
  console.error(noSeComCridarte.message);
}
console.log('FINAL');
