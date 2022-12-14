const loginBtn = document.querySelector('.js-login__btn');
const layoutOverlay = document.querySelector('.js-layout__overlay');
const darkLayout = document.querySelector('.js-dark-layout');
const loginForm = document.querySelector('.js-login__form-container');
const loginLink = document.querySelector('.js-login__link');
const signUpPasswordInput = document.querySelector('.password__input');
const signUpConfirmPasswordInput = document.querySelector(
  '.confirm-password__input'
);
function test() {
  console.log(signUpConfirmPasswordInput.value === signUpPasswordInput.value);
}
function showLoginForm() {
  layoutOverlay.classList.add('show');
}
function hideLoginForm() {
  layoutOverlay.classList.remove('show');
}

loginBtn.addEventListener('click', showLoginForm);
loginLink.addEventListener('click', showLoginForm);

darkLayout.addEventListener('click', hideLoginForm);
