const refs = {
  inputText: document.querySelector('#validation-input'),
};
refs.inputText.addEventListener('blur', onInputTextBlur);

function onInputTextBlur(event) {
  const valueLength = event.currentTarget.getAttribute('data-length');

  if (
    event.currentTarget.classList.contains('valid') ||
    event.currentTarget.classList.contains('invalid')
  ) {
    if (event.currentTarget.value.length < valueLength) {
      event.currentTarget.classList.replace('valid', 'invalid');
    } else {
      event.currentTarget.classList.replace('invalid', 'valid');
    }
  } else {
    if (event.currentTarget.value.length < valueLength) {
      event.currentTarget.classList.add('invalid');
    } else {
      event.currentTarget.classList.add('valid');
    }
  }
}
