import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

inputsValue();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  const items = dataValue();
  console.log(`email:${items.email}, message: ${items.message}`);

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataValue(event) {
  const inputInformation = localStorage.getItem(STORAGE_KEY);

  if (inputInformation) {
    return JSON.parse(inputInformation);
  }
  return {};
}

function inputsValue() {
  const items = dataValue();

  form.elements.email.value = items.email || ' ';
  form.elements.message.value = items.message || ' ';
}
