import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Sign_up.css';
import SpecialBtn from './Special_btn';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useRegisterMutation } from '../services/authApis';

function SignUp({ showLoginForm }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const signUpEmailInput = useRef(null);
  const signUpPasswordInput = useRef(null);
  const signUpConfirmPasswordInput = useRef(null);
  const privacyCheckBox = useRef(null);

  const [isDisabled, setIsDisabled] = useState(true);

  // RTK mutation hook for registration 
  const [register, { isLoading }] = useRegisterMutation();

  //   Sign up
  async function Validate(e) {
    e.preventDefault();

    const nameFormat = /^[a-zA-Z]*$/;
    const mailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passWordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!(firstNameInput.current.value && lastNameInput.current.value)) {
      alert('Please fill out your name!');
    } else if (
      !firstNameInput.current.value.match(nameFormat) ||
      !lastNameInput.current.value.match(nameFormat)
    ) {
      alert('Is it a joke or your parents really named you like that?!');
    } else if (!signUpEmailInput.current.value) {
      alert('Please fill out your email!');
    } else if (!signUpEmailInput.current.value.match(mailFormat)) {
      alert("You know Email's format right?!");
    } else if (!signUpPasswordInput.current.value) {
      alert('Please fill out your password!');
    } else if (!signUpPasswordInput.current.value.match(passWordFormat)) {
      alert(
        'Password must contain at least one number, one special character and has a length of eight!'
      );
    } else if (!signUpConfirmPasswordInput.current.value) {
      alert('Please confirm your password!');
    } else if (
      !(signUpConfirmPasswordInput.current.value === signUpPasswordInput.current.value)
    ) {
      alert('How can you forget your password just 5 seconds ago?!');
    } else {
      try {
        const res = await register(formData);

        if(res?.error) {
          const { error: { data } } = res;
          alert(data.message);
        } else {
          localStorage.setItem('user', JSON.stringify(res?.data.user));
          window.location.reload();
        }

      } catch(error) {

      }
    }
  }

  function toggleSignUpBtn() {
    setIsDisabled(prev => !prev);
  }
  
  return (
    <>
      {/* Sign up form */}
      <div className="sign-up__form-container js-sign-up__form-container">
        <form action="submit" className="sign-up__form" onSubmit={Validate}>
          <h1 className="sign-up__header">Sign up</h1>
          <h3 className="sign-up-login">
            Already have a account?{' '}
            <a href="#" className="login__link js-login__link" onClick={showLoginForm}>
              <strong>Log in here!</strong>
            </a>
          </h3>
          <div className="name__input-container">
            <input
              type="text"
              name=""
              className="column l-6 sign-up__input name__input first-name__input js-first-name__input"
              placeholder="First name"
              ref={firstNameInput}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            />
            <input
              type="text"
              name=""
              className="column l-6 sign-up__input name__input last-name__input js-last-name__input"
              placeholder="Last name"
              ref={lastNameInput}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
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
            ref={signUpEmailInput}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          <div className="column l-12 input__heading password__heading">
            Enter your password
          </div>
          <input
            type="password"
            name=""
            className="column l-12 sign-up__input password__input js-sign-up-password__input"
            ref={signUpPasswordInput}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          />
          <div className="column l-12 input__heading confirm-password__heading">
            Confirm your password
          </div>
          <input
            type="password"
            name=""
            className="column l-12 sign-up__input confirm-password__input js-sign-up-confirm-password__input"
            ref={signUpConfirmPasswordInput}
          />
          <div className="privacy-confirm__container">
            <input
              type="checkbox"
              name="privacy__checkbox"
              id="privacy__checkbox"
              className="privacy__checkbox js-privacy__checkbox"
              ref={privacyCheckBox}
              onChange={toggleSignUpBtn}
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
            className="sign-up-btn js-sign-up__btn"
            value="Sign Up"
            type="submit"
            isDisabled={isDisabled}
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
