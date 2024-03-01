const LOCAL_KEY = 'feedback-form-state';

const formFeedback = document.querySelector('.feedback-form');

formFeedback.addEventListener('input', onInputData);
formFeedback.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = formFeedback.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value.trim(), message: message.value.trim() };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  dataForm = {};
}

