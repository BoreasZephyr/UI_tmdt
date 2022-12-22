import React, { useState, useEffect, useRef } from 'react';

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
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../services/authApis';

function Profile() {
  const { data: profile, isFetching: isFetchingProfile } = useGetProfileQuery();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const [formData, setFormData] = useState();

  useEffect(() => {
    if (!isFetchingProfile) {
      setFormData({
        firstName: profile?.user.firstName,
        lastName: profile?.user.lastName,
        email: profile?.user.email,
        address: profile?.user.address,
        phoneNumber: profile?.user.phoneNumber,
      });
    }
  }, [!isFetchingProfile]);

  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const addressInput = useRef(null);
  const phoneNumberInput = useRef(null);

  async function ValidateProfileForm(e) {
    e.preventDefault();

    const phoneFormat = /^\d{10}$/;
    const nameFormat = /^[a-zA-Z]*$/;
    const mailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!firstNameInput.current.value)
      alert('Please fill out your first name!');
    else if (!lastNameInput.current.value)
      alert('Please fill out your last name!');
    else if (
      !(
        firstNameInput.current.value.match(nameFormat) &&
        lastNameInput.current.value.match(nameFormat)
      )
    )
      alert('You know name not written like that right?!');
    else if (!emailInput.current.value) alert('Please fill out your email!');
    else if (!emailInput.current.value.match(mailFormat))
      alert('How on Earth email written like that?!');
    else if (!addressInput.current.value) alert('Are you homeless?');
    else if (!phoneNumberInput.current.value)
      alert('How shipper gonna call you?');
    else if (!phoneNumberInput.current.value.match(phoneFormat))
      alert('No one in Viet Name has phone number like that!');
    else {
      try {
        const res = await updateProfile(formData);

        if (res?.error) {
          const {
            error: { data },
          } = res;
          alert(data.message);
        } else {
          window.location.reload();
        }
      } catch (error) {}
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ProfileNavbar No="nav__link-1" />
      <div className="grid wide">
        <div className="row">
          <div className="column l-10 profile-main-content">
            {/* Profile form */}
            <div className="profile__form-container js-profile__form-container">
              <form
                action="submit"
                onSubmit={ValidateProfileForm}
                className="profile__form"
              >
                <div className="name__input-container">
                  <input
                    type="text"
                    name=""
                    className="column l-6 profile__input name__input first-name__input js-first-name__input"
                    placeholder="First name"
                    defaultValue={profile?.user.firstName}
                    ref={firstNameInput}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    name=""
                    className="column l-6 profile__input name__input last-name__input js-last-name__input"
                    placeholder="Last name"
                    defaultValue={profile?.user.lastName}
                    ref={lastNameInput}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="column l-12 input__heading email__heading">
                  Enter your email
                </div>
                <input
                  type="email"
                  name=""
                  className="column l-12 profile__input email__input js-profile-email__input"
                  placeholder="Enter your email"
                  defaultValue={profile?.user.email}
                  ref={emailInput}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <div className="column l-12 input__heading address__heading">
                  Enter your address
                </div>
                <input
                  type="text"
                  name=""
                  className="column l-12 profile__input address__input js-profile-address__input"
                  placeholder="Enter your address"
                  defaultValue={profile?.user.address}
                  ref={addressInput}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                />
                <div className="column l-12 input__heading phone-number__heading">
                  Phone number
                </div>
                <input
                  type="tel"
                  name=""
                  className="column l-12 profile__input phone-number__input js-profile-phone-number__input"
                  placeholder="Enter your phone number"
                  defaultValue={profile?.user.phoneNumber}
                  ref={phoneNumberInput}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
                <SpecialBtn
                  className="profile__btn js-profile-save-changes__btn"
                  value="Save changes"
                  type="submit"
                  isDisabled={isLoading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
