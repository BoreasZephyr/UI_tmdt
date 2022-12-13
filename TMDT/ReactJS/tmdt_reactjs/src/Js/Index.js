export const loginBtn = document.querySelector('.js-login__btn');
export const layoutOverlay = document.querySelector('.js-layout__overlay');
export const darkLayout = document.querySelector('.js-dark-layout');
export const loginForm = document.querySelector('.js-login__form-container');
export const loginLink = document.querySelector('.js-login__link');

export function showLoginForm() {
  layoutOverlay.classList.add('show');
}
export function hideLoginForm() {
  layoutOverlay.classList.remove('show');
}

loginBtn.addEventListener('click', showLoginForm);

darkLayout.addEventListener('click', hideLoginForm);
