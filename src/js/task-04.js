const buttonDecEl = document.querySelector('[data-action="decrement"]');
const buttonIncEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

buttonDecEl.addEventListener('click', onButtonDecClick);
buttonIncEl.addEventListener('click', onButtonIncClick);

function onButtonDecClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
function onButtonIncClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
