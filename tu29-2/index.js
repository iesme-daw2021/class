function setTimer(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('funciona'), ms);
  });
}

setTimer(2000)
  .then((result) => {
    console.log(result);
    return 23;
  })
  .then((result) => {
    console.log('segundo ', result);
    return setTimer(2000);
  })
  .then((result) => {
    console.log(result);
  });
