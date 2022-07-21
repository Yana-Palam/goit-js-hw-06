const buttonDecEl = document.querySelector('[data-action="decrement"]');
const buttonIncEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

buttonDecEl.addEventListener('click', onButtonDecClick);
buttonIncEl.addEventListener('click', onButtonIncClick);

function onButtonDecClick() {
  counterValue = Number(valueEl.textContent) - 1;
  valueEl.textContent = counterValue;
}
function onButtonIncClick() {
  counterValue = Number(valueEl.textContent) + 1;
  valueEl.textContent = counterValue;
}
