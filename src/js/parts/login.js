const modalLogin = document.querySelector('.login');

const modalBtnOpen = document.querySelector('.header__log');
const modalBtnClose = document.querySelector('.login__close');
const body = document.querySelector('body');

modalBtnOpen.addEventListener('click', () => {
  modalLogin.classList.add('is-active');
  body.classList.add('modal-open');
});

modalBtnClose.addEventListener('click', () => {
  modalLogin.classList.remove('is-active');
  body.classList.remove('modal-open');
});

modalLogin.addEventListener('click', e => {
  if (!e.target.closest('.login__body')) {
    modalLogin.classList.remove('is-active');
    body.classList.remove('modal-open');
  }
});
