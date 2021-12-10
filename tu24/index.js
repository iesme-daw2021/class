window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('div').addEventListener('click', (event) => {
    console.log('current: ' + event.currentTarget);
    console.log('target: ' + event.target);
  });
});
