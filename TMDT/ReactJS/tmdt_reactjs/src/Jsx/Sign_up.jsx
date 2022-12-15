import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Sign_up.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect } from 'react';

function SignUp() {
  useEffect(() => {
    const loginLink = document.querySelector('.js-login__link');
    const layoutOverlay = document.querySelector('.js-layout__overlay');
    const darkLayout = document.querySelector('.js-dark-layout');
    const loginEmailInput = document.querySelector('.js-email__input');
    const loginPasswordInput = document.querySelector('.js-password__input');
    const firstNameInput = document.querySelector('.js-first-name__input');
    const lastNameInput = document.querySelector('.js-last-name__input');
    const signUpEmailInput = document.querySelector('.js-sign-up-email__input');
    const signUpPasswordInput = document.querySelector(
      '.js-sign-up-password__input'
    );
    const signUpConfirmPasswordInput = document.querySelector(
      '.js-sign-up-confirm-password__input'
    );
    const privacyCheckBox = document.querySelector('.js-privacy__checkbox');
    const privacyLabel = document.querySelector('.js-privacy__label');
    const signUpBtn = document.querySelector('.js-sign-up__btn');

    // Uncheck checkbox
    privacyCheckBox.checked = false;
    // Login
    function showLoginForm() {
      layoutOverlay.classList.add('show');
    }
    function hideLoginForm() {
      layoutOverlay.classList.remove('show');
    }
    //   Sign up
    function Validate(e) {
      var nameFormat = /^[a-zA-Z]*$/;
      var mailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      var passWordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;

      if (!(firstNameInput.value && lastNameInput.value)) {
        alert('Please fill out your name!');
        e.preventDefault();
      } else if (
        !firstNameInput.value.match(nameFormat) ||
        !lastNameInput.value.match(nameFormat)
      ) {
        alert('Is it a joke or your parents really named you like that?!');
        e.preventDefault();
      } else if (!signUpEmailInput.value) {
        alert('Please fill out your email!');
        e.preventDefault();
      } else if (!signUpEmailInput.value.match(mailFormat)) {
        alert("You know Email's format right?!");
        e.preventDefault();
      } else if (!signUpPasswordInput.value) {
        alert('Please fill out your password!');
        e.preventDefault();
      } else if (!signUpPasswordInput.value.match(passWordFormat)) {
        alert(
          'Password must contain at least one number, one special character and has a length of eight!'
        );
        e.preventDefault();
      } else if (!signUpConfirmPasswordInput.value) {
        alert('Please confirm your password!');
        e.preventDefault();
      } else if (
        !(signUpConfirmPasswordInput.value === signUpPasswordInput.value)
      ) {
        alert('How can you forget your password just 5 seconds ago?!');
        e.preventDefault();
      }
    }
    function toggleSignUpBtn() {
      privacyCheckBox.checked
        ? (signUpBtn.disabled = false)
        : (signUpBtn.disabled = true);
      signUpBtn.classList.toggle('disabled');
    }

    loginLink.addEventListener('click', showLoginForm);
    darkLayout.addEventListener('click', hideLoginForm);
    privacyCheckBox.addEventListener('click', toggleSignUpBtn);
    signUpBtn.addEventListener('click', Validate);
  });
  return (
    <>
      {/* Header */}
      <Header />
      {/* Sign up form */}
      <div className="sign-up__form-container js-sign-up__form-container">
        <form action="submit" className="sign-up__form">
          <h1 className="sign-up__header">Sign up</h1>
          <h3 className="sign-up-login">
            Already have a account?{' '}
            <a href="#" className="login__link js-login__link">
              <strong>Log in here!</strong>
            </a>
          </h3>
          <div className="name__input-container">
            <input
              type="text"
              name=""
              className="column l-6 sign-up__input name__input first-name__input js-first-name__input"
              placeholder="First name"
            />
            <input
              type="text"
              name=""
              className="column l-6 sign-up__input name__input last-name__input js-last-name__input"
              placeholder="Last name"
            />
          </div>
          <div className="column l-12 input__heading email__heading">
            Enter your email
          </div>
          <input
            type="email"
            name=""
            className="column l-12 sign-up__input email__input js-sign-up-email__input"
            placeholder="a123@gmail.com"
          />
          <div className="column l-12 input__heading password__heading">
            Enter your password
          </div>
          <input
            type="password"
            name=""
            className="column l-12 sign-up__input password__input js-sign-up-password__input"
          />
          <div className="column l-12 input__heading confirm-password__heading">
            Confirm your password
          </div>
          <input
            type="password"
            name=""
            className="column l-12 sign-up__input confirm-password__input js-sign-up-confirm-password__input"
          />
          <div className="privacy-confirm__container">
            <input
              type="checkbox"
              name="privacy__checkbox"
              id="privacy__checkbox"
              className="privacy__checkbox js-privacy__checkbox"
            />
            <label
              htmlFor="privacy__checkbox"
              className="privacy__label js-privacy__label"
            >
              I agree to{' '}
              <a href="" className="term__link">
                <strong>Terms & Policy</strong>
              </a>
            </label>
          </div>
          <SpecialBtn
            className="sign-up-btn js-sign-up__btn disabled"
            value="Sign Up"
            type="submit"
          />
          <div className="sign-up-google__heading">or sign up with</div>
          <button className="column l-6 btn sign-up-google__btn">
            <FontAwesomeIcon icon={faGoogle} />
            &nbsp; SIGN UP WITH GOOGLE
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
