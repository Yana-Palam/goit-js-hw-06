const refs = {
  boxesEl: document.querySelector('#boxes'),
  inputNumber: document.querySelector('[type="number"]'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
};
let startWidth = 30;
const step = 10;
let amount = 0;

refs.buttonCreate.addEventListener('click', onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);
refs.inputNumber.addEventListener('input', onInputChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function makeBoxMarkup() {
  return `<div class="newBox" style="
    background-color: ${getRandomHexColor()};
    height: ${startWidth}px;
    width: ${startWidth}px;">
    </div>`;
}

function createBoxes(amount) {
  let boxes = '';
  for (let i = 0; i < amount; i += 1) {
    const box = makeBoxMarkup();
    boxes += box;

    startWidth += step;
  }
  refs.boxesEl.insertAdjacentHTML('afterbegin', boxes);
}

function onInputChange(event) {
  amount = Number(event.currentTarget.value);
}

function onButtonCreateClick() {
  createBoxes(Number(amount));
}

function onButtonDestroyClick() {
  refs.boxesEl.innerHTML = '';
  startWidth = 30;
}
