import React, { useRef, useState } from 'react';

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
import 'react-multi-carousel/lib/styles.css';
import { useUpdatePasswordMutation } from '../services/authApis';

function ChangePassWord() {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const [formData, setFormData] = useState({
    oldPassWord: '',
    newPassWord: '',
  });

  const oldPassWordInput = useRef(null);
  const newPassWordInput = useRef(null);
  const confirmPassWordInput = useRef(null);

  async function changePassWordValidate(e) {
    e.preventDefault();

    const passWordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!oldPassWordInput.current.value) {
      alert("How can you change something if you don't already have it?");
    } else if (!newPassWordInput.current.value) {
      alert('Not come up with a new password yet?');
    } else if (!newPassWordInput.current.value.match(passWordFormat)) {
      alert('Password must have at least one number, one special character, and length of eight!');
    } else if (newPassWordInput.current.value === oldPassWordInput.current.value) {
      alert('You want to change something to anything same to it?');
    } else if (newPassWordInput.current.value !== confirmPassWordInput.current.value) {
      alert("How can you forget it?! It's just 5 seconds ago? ");
    } else {
      try {
        const res = await updatePassword(formData);

        if (res?.error) {
          const { error: { data } } = res;
          alert(data.message);
        } else {
          window.location.reload();
        }
      } catch (error) {

      }
    }
  }

  return (
    <>
      <ProfileNavbar />
      <div className="grid wide">
        <div className="row">
          <div className="column col-10 profile-main-content">
            <div className="profile__form-container">
              <form action="submit" onSubmit={changePassWordValidate} className="profile-change-password__form">
                <div className="column l-12 input__heading change-password__heading">
                  Enter your old password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-old-password__input js-change-old-password__input"
                  placeholder='Old password'
                  ref={oldPassWordInput}
                  onChange={(e) => setFormData(prev => ({ ...prev, oldPassword: e.target.value }))}
                />
                <div className="column l-12 input__heading change-password__heading">
                  Enter your new password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-new-password__input js-change-new-password__input"
                  placeholder='New password'
                  ref={newPassWordInput}
                  onChange={(e) => setFormData(prev => ({ ...prev, newPassword: e.target.value }))}
                />
                <div className="column l-12 input__heading change-password__heading">
                  Confirm your new password
                </div>
                <input
                  type="password"
                  name=""
                  className="column l-12 profile__input change-password__input change-confirm-password__input js-change-confirm-password__input"
                  placeholder='Confirm password'
                  ref={confirmPassWordInput}
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
