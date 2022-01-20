// const promise = fetch('https://api.github.com/orgs/iesme-daw2021/repos');
// promise
//   .then((response) => {
//     if (response.ok) {
//       console.log('funciona');
//       return response.json();
//     } else {
//       console.log(response.status);
//       throw new Error('404');
//     }
//   })
//   .then((data) => {
//     console.log(data[2].owner.avatar_url);
//   })
//   .catch((error) => {
//     console.log('ignore');
//   });

// (async function () {
//   const response = await fetch(
//     'https://api.github.com/orgs/iesme-daw2021/repos'
//   );
//   if (response.ok) {
//     console.log('funciona');
//   }
// })();

// (async () => {
//   const response = await fetch(
//     'https://api.github.com/orgs/iesme-daw2021/repos'
//   );
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// })();

(async () => {
  const response = await fetch(
    'https://api.github.com/orgs/iesme-daw2021/repos'
  );
  if (response.ok) {
    console.log(response.headers.get('content-type'));
    for (const [key, value] of response.headers) {
      console.log(`Key = ${key}, Value = ${value}`);
    }
  }
})();
