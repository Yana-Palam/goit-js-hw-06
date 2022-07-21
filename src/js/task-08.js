const refs = {
  inputForm: document.querySelector('.login-form'),
};
refs.inputForm.addEventListener('submit', onInputFormSubmit);
function onInputFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Error! Всі поля повинні бути заповнені');
  } else {
    // const formData = new FormData(event.currentTarget);
    const userEmail = email.value.trim();
    const userPassword = password.value.trim();
    const user = {
      userEmail,
      userPassword,
    };
    console.log(user);
    event.currentTarget.reset();
  }
}
