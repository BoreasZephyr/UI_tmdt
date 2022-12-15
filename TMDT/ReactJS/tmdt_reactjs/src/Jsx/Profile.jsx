import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Profile.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import ProfileNavbar from './Profile_navbar';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import { useEffect } from 'react';

function Profile() {
  useEffect(() => {
    const firstNameInput = document.querySelector('.js-first-name__input');
    const lastNameInput = document.querySelector('.js-last-name__input');
    const profileEmailInput = document.querySelector(
      '.js-profile-email__input'
    );
    const profileAddressInput = document.querySelector(
      '.js-profile-address__input'
    );
    const profilePhoneNumberInput = document.querySelector(
      '.js-profile-phone-number__input'
    );
    const profileSaveButton = document.querySelector(
      '.js-profile-save-changes__btn'
    );
    function ValidateProfileForm() {
      var phoneFormat = /^\d{10}$/;
      var nameFormat = /^[a-zA-Z]*$/;
      var mailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (!firstNameInput.value) alert('Please fill out your first name!');
      else if (!lastNameInput.value) alert('Please fill out your last name!');
      else if (
        !(
          firstNameInput.value.match(nameFormat) &&
          lastNameInput.value.match(nameFormat)
        )
      )
        alert('You know name not written like that right?!');
      else if (!profileEmailInput.value) alert('Please fill out your email!');
      else if (!profileEmailInput.value.match(mailFormat))
        alert('How on Earth email written like that?!');
      else if (!profileAddressInput.value) alert('Are you homeless?');
      else if (!profilePhoneNumberInput.value)
        alert('How shipper gonna call you?');
      else if (!profilePhoneNumberInput.value.match(phoneFormat))
        alert('No one in Viet Name has phone number like that!');
    }
    profileSaveButton.addEventListener('click', ValidateProfileForm);
  });
  return (
    <>
      <Header />
      <ProfileNavbar />
      <div className="grid wide">
        <div className="row">
          <div className="column l-10 profile-main-content">
            {/* Profile form */}
            <div className="profile__form-container js-profile__form-container">
              <form action="submit" className="profile__form">
                <div className="name__input-container">
                  <input
                    type="text"
                    name=""
                    className="column l-6 profile__input name__input first-name__input js-first-name__input"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name=""
                    className="column l-6 profile__input name__input last-name__input js-last-name__input"
                    placeholder="Last name"
                  />
                </div>
                <div className="column l-12 input__heading email__heading">
                  Enter your email
                </div>
                <input
                  type="email"
                  name=""
                  className="column l-12 profile__input email__input js-profile-email__input"
                  placeholder="a123@gmail.com"
                />
                <div className="column l-12 input__heading address__heading">
                  Enter your address
                </div>
                <input
                  type="text"
                  name=""
                  className="column l-12 profile__input address__input js-profile-address__input"
                  placeholder="So 1 VVN, thanh pho Thu Duc, thanh pho Ho Chi Minh"
                />
                <div className="column l-12 input__heading phone-number__heading">
                  Phone number
                </div>
                <input
                  type="tel"
                  name=""
                  className="column l-12 profile__input phone-number__input js-profile-phone-number__input"
                  placeholder="0123456789"
                />
              </form>
              <SpecialBtn
                className="profile__btn js-profile-save-changes__btn"
                value="Save changes"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
