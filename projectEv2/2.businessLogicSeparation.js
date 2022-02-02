// UI
const input = document.body.firstElementChild;
const button = input.nextElementSibling;

button.addEventListener('click', (event) => {
  const isValid = isValidNIF(input.value, showNif);
  // DO SOMETHING IF YOU WANT IN THE UI
});

function showNif(value) {
  const element = document.createElement('p');
  element.textContent = value;
  document.body.appendChild(element);
}

// BL
function isValidNIF(value, showResult) {
  showResult(value);
  return true;
}
