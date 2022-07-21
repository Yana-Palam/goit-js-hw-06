const refs = {
  inputText: document.querySelector('#validation-input'),
};
refs.inputText.addEventListener('blur', onInputTextBlur);

function onInputTextBlur(event) {
  const valueLength = Number(event.currentTarget.getAttribute('data-length'));

  if (event.currentTarget.value.length === valueLength) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}
