import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Profile.css';
import '../Css/Profile_change_password.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import ProfileNavbar from './Profile_navbar';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';

function ChangePassWord() {
  useEffect(() => {
    const oldPassWordInput = document.querySelector(
      '.js-change-old-password__input'
    );
    const newPassWordInput = document.querySelector(
      '.js-change-new-password__input'
    );
    const confirmPassWordInput = document.querySelector(
      '.js-change-confirm-password__input'
    );
    const changePassWordBtn = document.querySelector(
      '.js-profile-save-changes__btn'
    );
    const changePassWordForm = document.querySelector(
      '.profile-change-password__form'
    );

    function changePassWordValidate(e) {
      var passWordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;

      if (!oldPassWordInput.value) {
        alert("How can you change something if you don't already have it?");
        e.preventDefault();
      } else if (!oldPassWordInput.value.match(passWordFormat)) {
        alert(
          'Password must have at least one number, one special character, and length of eight!'
        );
        e.preventDefault();
      } else if (!newPassWordInput.value) {
        alert('Not come up with a new password yet?');
        e.preventDefault();
      } else if (!newPassWordInput.value.match(passWordFormat)) {
        alert(
          'Password must have at least one number, one special character, and length of eight!'
        );
        e.preventDefault();
      } else if (newPassWordInput.value === oldPassWordInput.value) {
        alert('You want to change something to anything same to it?');
        e.preventDefault();
      } else if (!(newPassWordInput.value === confirmPassWordInput.value)) {
        alert("How can you forget it?! It's just 5 seconds ago? ");
        e.preventDefault();
      }
    }
    changePassWordBtn.addEventListener('click', changePassWordValidate);
  });
  return (
    <>
      <Header />
      <ProfileNavbar />
      <div className="grid wide">
        <div className="row">
          <div className="column col-10 profile-main-content">
            <div className="profile__form-container">
              <form action="" className="profile-change-password__form">
                <div className="column l-12 input__heading change-password__heading">
                  Enter your old password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-old-password__input js-change-old-password__input"
                />
                <div className="column l-12 input__heading change-password__heading">
                  Enter your new password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-new-password__input js-change-new-password__input"
                />
                <div className="column l-12 input__heading change-password__heading">
                  Confirm your new password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-confirm-password__input js-change-confirm-password__input"
                />
                <SpecialBtn
                  className="profile__btn change-password__btn js-profile-save-changes__btn"
                  value="Save changes"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePassWord;
