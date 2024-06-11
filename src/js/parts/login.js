import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

const modalLogin = document.querySelector('.login');

const modalBtnOpen = document.querySelector('.header__log');
const modalBtnClose = document.querySelector('.login__close');
const body = document.querySelector('body');

function closeModal() {
  modalLogin.classList.remove('is-active');
  body.classList.remove('modal-open');
}

modalBtnOpen.addEventListener('click', () => {
  modalLogin.classList.add('is-active');
  body.classList.add('modal-open');
});

modalBtnClose.addEventListener('click', () => {
  closeModal();
});

modalLogin.addEventListener('click', e => {
  if (!e.target.closest('.login__body')) {
    closeModal();
  }
});

const formLogin = document.querySelector('.login__form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();

  closeModal();

  formLogin.reset();
});

export function validateLoginForm() {
  const inputs = document.querySelectorAll('.login__box input');

  const emailInput = document.getElementById('login-name');
  const passwordInput = document.getElementById('login-password');
  const checkbox = document.getElementById('login-checkbox');
  const btnSubmit = document.querySelector('.login__sbm');

  function validateForm() {
    let formIsValid = true;

    if (!isEmail(emailInput.value.trim())) {
      formIsValid = false;
    }

    if (isEmpty(passwordInput.value.trim())) {
      formIsValid = false;
    }

    if (!checkbox.checked) {
      formIsValid = false;
    }

    btnSubmit.disabled = !formIsValid;
  }

  function validateField(field) {
    if (field === emailInput) {
      if (!isEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
    }

    if (field === passwordInput) {
      if (isEmpty(passwordInput.value.trim())) {
        passwordInput.classList.add('error');
      } else {
        passwordInput.classList.remove('error');
      }
    }

    if (field === checkbox) {
      if (!checkbox.checked) {
        checkbox.classList.add('error');
      } else {
        checkbox.classList.remove('error');
      }
    }

    validateForm();
  }

  inputs.forEach(input => {
    input.addEventListener('input', validateForm);
    input.addEventListener('blur', () => validateField(input));
  });

  checkbox.addEventListener('change', () => {
    validateForm();
    validateField(checkbox);
  });

  validateForm();
}
