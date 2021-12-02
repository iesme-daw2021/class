const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
  button.addEventListener('click', buttonHandler);
});

function buttonHandler(event) {
  event.target.disabled = true;
}
