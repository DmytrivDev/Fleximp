import isEmail from 'validator/lib/isEmail';

const modalLogin = document.querySelector('.login');
const modalRecovery = document.querySelector('.recovery');

const modalBtnOpen = document.querySelector('.login__recovery');
const modalBtnClose = document.querySelector('.recovery__close');
const body = document.querySelector('body');

function closeRecoveryModal() {
  modalRecovery.classList.remove('is-active');
  body.classList.remove('modal-open');
}

modalBtnOpen.addEventListener('click', () => {
  modalLogin.classList.remove('is-active');
  modalRecovery.classList.add('is-active');
  body.classList.add('modal-open');
});

modalBtnClose.addEventListener('click', () => {
  closeRecoveryModal();
});

modalRecovery.addEventListener('click', e => {
  if (!e.target.closest('.recovery__body')) {
    closeRecoveryModal();
  }
});

const emailInput = document.getElementById('recovery-email');

function validateForm() {
  let formIsValid = true;

  if (!isEmail(emailInput.value.trim())) {
    formIsValid = false;
  }

  return formIsValid;
}

function validateField(field) {
  if (field === emailInput) {
    if (!isEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
  }
}

emailInput.addEventListener('blur', () => validateField(emailInput));

const formRecovery = document.querySelector('.recovery__form');

export function recoveryFormSumbit() {
  formRecovery.addEventListener('submit', event => {
    event.preventDefault();

    const validate = validateForm();

    if (!validate) {
      validateField(emailInput);
      return;
    }

    closeRecoveryModal();

    formRecovery.reset();
  });
}
