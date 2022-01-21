const aElement = document.getElementById('mapLink');

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    console.log('PASA');
    aElement.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
  });
}
