const refs = {
  inputRange: document.querySelector('#font-size-control'),
  outputText: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', onInputRange);

function onInputRange(event) {
  refs.outputText.style.fontSize = event.currentTarget.value + 'px';
}
