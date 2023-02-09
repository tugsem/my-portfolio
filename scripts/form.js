const form = document.querySelector('#contact-form');
const msg = document.querySelector('small');
const EMAIL_INVALID = 'Form is not sent. Please use lower case.';

function showError(email, message) {
  msg.innerText = message;
  msg.className = 'error';
  email.classList.add('active');
}

function validateEmail(email, EMAIL_INVALID) {
  if (/[a-z]/.test(email.value) && /[A-Z]/.test(email.value)) {
    return showError(email, EMAIL_INVALID);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  msg.innerText = '';
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});