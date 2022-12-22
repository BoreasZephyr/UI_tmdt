import { React, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import Header from './Header';
import Footer from './Footer';

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import ProfileNavbar from './Profile_navbar';

function UserScore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ProfileNavbar No="nav__link-5" />
      <div className="grid wide">
        <div className="row">
          <div className="column l-10 profile-main-content">
            <h1 className="user-score">Your current score: 94/100</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserScore;
