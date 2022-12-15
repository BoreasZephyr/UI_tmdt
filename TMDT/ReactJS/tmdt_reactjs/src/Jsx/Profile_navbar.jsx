import React, { Component, useRef } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Profile_navbar.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProfileNavbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.js-nav__link');
    for (var navLink of navLinks) {
      navLink.addEventListener('click', () => {
        for (var navLink of navLinks) {
          if (navLink.classList.contains('active'))
            navLink.classList.remove('active');
        }
      });
    }
  });
  //  console.log(navLinks[1].classList.contains('active'));
  // const ref=React.createRef();
  function toggleActiveNavLink(event) {
    event.target.classList.add('active');
  }
  return (
    <>
      {/* <div className="grid"> */}
      <div className="column l-2 profile__nav-container">
        <Link
          to="/Profile"
          className="js-nav__link nav__link nav__link-profile active"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          Profile
        </Link>
        <Link
          to="/ChangePassWord"
          className="js-nav__link nav__link nav__link-change-password"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          Change password
        </Link>
        <a
          href="#"
          className="js-nav__link nav__link nav__link-products"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          Products
        </a>
        <a
          href="#"
          className="js-nav__link nav__link nav__link-won=products"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          Won products
        </a>
        <Link
          to="/UserScore"
          className="js-nav__link nav__link nav__link-score"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          Score
        </Link>
        <Link
          to="/MyProducts"
          className="js-nav__link nav__link nav__link-my-products"
          onClick={(event) => toggleActiveNavLink(event)}
        >
          My products
        </Link>
      </div>
    </>
  );
  // </div>
}
export default ProfileNavbar;
