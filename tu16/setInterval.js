function refresh() {
  console.log('get new data');
  setInterval(refresh, 3000);
}

refresh();
