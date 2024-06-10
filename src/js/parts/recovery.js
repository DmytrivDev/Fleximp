const modalLogin = document.querySelector('.login');
const modalRecovery = document.querySelector('.recovery');

const modalBtnOpen = document.querySelector('.login__recovery');
const modalBtnClose = document.querySelector('.recovery__close');
const body = document.querySelector('body');

modalBtnOpen.addEventListener('click', () => {
  modalLogin.classList.remove('is-active');
  modalRecovery.classList.add('is-active');
  body.classList.add('modal-open');
});

modalBtnClose.addEventListener('click', () => {
  modalRecovery.classList.remove('is-active');
  body.classList.remove('modal-open');
});

modalRecovery.addEventListener('click', e => {
  if (!e.target.closest('.recovery__body')) {
    modalRecovery.classList.remove('is-active');
    body.classList.remove('modal-open');
  }
});
