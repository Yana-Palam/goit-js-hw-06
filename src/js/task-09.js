function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  textColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  refs.textColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
