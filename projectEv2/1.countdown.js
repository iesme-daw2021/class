countdown(5);

async function countdown(seconds) {
  for (let i = seconds; i >= 0; i--) {
    await waitSeconds(1);
    console.log(i);
  }
}

function waitSeconds(numSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), numSeconds * 1000);
  });
}
