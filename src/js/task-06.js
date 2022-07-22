const refs = {
  inputText: document.querySelector('#validation-input'),
};
refs.inputText.addEventListener('blur', onInputTextBlur);

function onInputTextBlur(event) {
  const valueLength = Number(event.currentTarget.getAttribute('data-length'));

  if (event.currentTarget.value.length === valueLength) {
    addAndRemoveClass('invalid', 'valid');
  } else {
    addAndRemoveClass('valid', 'invalid');
  }
}

function addAndRemoveClass(classToRemove, classToAdd) {
  event.currentTarget.classList.remove(classToRemove);
  event.currentTarget.classList.add(classToAdd);
}
