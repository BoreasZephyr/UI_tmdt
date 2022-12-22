import React, { Component, useRef, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Profile_navbar.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link, NavLink } from 'react-router-dom';

function ProfileNavbar(prop) {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.js-nav__link');
    // console.log(navLinks);
    for (var navLink of navLinks) {
      if (navLink.classList.contains(`${prop.No}`))
        navLink.classList.add('active');
    }
  }, []);
  return (
    <>
      {/* <div className="grid"> */}
      <div className="column l-2 profile__nav-container">
        <Link
          to="/profile"
          className="js-nav__link nav__link nav__link-1 nav__link-profile"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink1}
        >
          Profile
        </Link>
        <Link
          to="/change-password"
          className="js-nav__link nav__link nav__link-2 nav__link-change-password"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink2}
        >
          Change password
        </Link>
        {/* <a
          href="#"
          className="js-nav__link nav__link nav__link-3 nav__link-products"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink3}
        >
          Products
        </a> */}
        <Link
          to="/won-products"
          className="js-nav__link nav__link nav__link-4 nav__link-won=products"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink4}
        >
          Won products
        </Link>
        <Link
          to="/user-score"
          className="js-nav__link nav__link nav__link-5 nav__link-score"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink5}
        >
          Score
        </Link>
        <Link
          to="/my-products"
          className="js-nav__link nav__link nav__link-6 nav__link-my-products"
          // onClick={(event) => toggleActiveNavLink(event)}
          // ref={navLink6}
        >
          My products
        </Link>
      </div>
    </>
  );
  // </div>
}
export default ProfileNavbar;
