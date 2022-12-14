import React, { Component, useRef } from 'react';


import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Profile_navbar.css'
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import 'bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react';


function ProfileNavbar(){
    useEffect(()=>{
      const  navLinks=document.querySelectorAll('.js-nav__link') 
      for(var navLink of navLinks){
        navLink.addEventListener('click', ()=>{
            for(var navLink of navLinks){
                if(navLink.classList.contains('active')) navLink.classList.remove('active')
            }
        })
      }
    })
    //  console.log(navLinks[1].classList.contains('active'));
    // const ref=React.createRef();
    function toggleActiveNavLink(event) {

        event.target.classList.add('active')
    }
    return <div>
        <div className="grid">
            <div className="column l-2 profile__nav-container">
                <a href="#" className="js-nav__link nav__link nav__link-profile active" onClick={event => toggleActiveNavLink(event)}>Profile</a>
                <a href="#" className="js-nav__link nav__link nav__link-change-password" onClick={event => toggleActiveNavLink(event)}>Change password</a>
                <a href="#" className="js-nav__link nav__link nav__link-products" onClick={event => toggleActiveNavLink(event)}>Products</a>
                <a href="#" className="js-nav__link nav__link nav__link-won=products" onClick={event => toggleActiveNavLink(event)}>Won products</a>
                <a href="#" className="js-nav__link nav__link nav__link-score" onClick={event => toggleActiveNavLink(event)}>Score</a>
                <a href="#" className="js-nav__link nav__link nav__link-my=products" onClick={event => toggleActiveNavLink(event)}>My products</a>
            </div>
        </div>
</div>
}
export default ProfileNavbar;