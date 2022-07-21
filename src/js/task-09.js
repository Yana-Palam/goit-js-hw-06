function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  textColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  refs.textColor.textContent = color;
  document.body.style.backgroundColor = color;
}
