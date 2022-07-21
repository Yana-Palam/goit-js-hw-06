const refs = {
  inputForm: document.querySelector('.login-form'),
};
refs.inputForm.addEventListener('submit', onInputFormSubmit);
function onInputFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('Error! Всі поля повинні бути заповнені');
  } else {
    // const formData = new FormData(event.currentTarget);
    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const user = {
      mail,
      password,
    };
    console.log(user);
    event.currentTarget.reset();
  }
}
