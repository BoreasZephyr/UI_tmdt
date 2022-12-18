import React, { useState, useRef, forwardRef } from 'react';
import { useLoginMutation } from '../services/authApis';
import SpecialBtn from './Special_btn';
import { Link } from 'react-router-dom';

// Export this Component as forwardRef (reference to a Component) so that we can reference to an element in here from outside
function Sign_in({ showLoginForm, hideLoginForm }, ref) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [login, { isLoading }] = useLoginMutation();

  // init ref variables
  const loginEmailInput = useRef(null); // --> ref to "js-email__input" input
  const loginPasswordInput = useRef(null); // --> ref to "js-password__input" input

  async function Validate(e) {
    e.preventDefault();
    const mailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!loginEmailInput.current.value) {
      alert('Please fill out the email field!');
    } else if (!loginEmailInput.current.value.match(mailFormat)) {
      alert('Your email is not match the format!');
    } else if (!loginPasswordInput.current.value) {
      alert('Please fill out the password field!');
    } else {
      try {
        const res = await login(formData);

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

  return (
    <div className="layout__overlay js-layout__overlay" ref={ref}>
      <div className="dark-layout js-dark-layout" onClick={hideLoginForm}></div>
      <div className="login__form-container js-login__form-container">
        <form
          action="submit"
          className="login__form"
          onSubmit={Validate}
          autoComplete="off"
        >
          <h1 className="login__header">Log in</h1>
          <h3 className="login-signup">
            New member?{' '}
            <Link to="/SignUp" href="#" className="signup__link" onClick={hideLoginForm}>
              <strong>Sign up here!</strong>
            </Link>
          </h3>
          <div className="column l-12 input__heading email__heading">
            Enter your email
          </div>
          <input
            type="email"
            className="column l-12 login__input email__input js-email__input"
            placeholder="a123@email.com"
            ref={loginEmailInput}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <div className="column l-12 input__heading password__heading">
            Enter your password
          </div>
          <input
            type="password"
            className="column l-12 login__input password__input js-password__input"
            ref={loginPasswordInput}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <a href="#" className="forgot-password__link">
            Forgot password?
          </a>
          <SpecialBtn
            className=" log-in__btn js-login__btn-submit"
            type="submit"
            value="Log In"
            isDisabled={isLoading}
          />
          {/* <button className="column l-12 btn primary-btn log-in__btn js-login__btn-submit">
            Log In
          </button> */}
          <div className="sign-up-google__heading">or sign up with</div>
          <button className="column l-6 btn sign-up-google__btn">
            <i className="fa-brands fa-google"></i>
            SIGN UP WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default forwardRef(Sign_in);
