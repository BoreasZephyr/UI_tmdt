import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React, { Component }  from 'react';

import '../Css/Base.css'
import '../Css/Grid.css'
import '../Css/Main.css'
import '../Css/Header.css'
import { useEffect } from 'react';


function Header(){
    useEffect(()=>{
    const loginBtn = document.querySelector('.js-login__btn');
    const loginBtnSubmit = document.querySelector('.js-login__btn-submit')
    const layoutOverlay = document.querySelector('.js-layout__overlay');
    const darkLayout = document.querySelector('.js-dark-layout');
    const loginEmailInput = document.querySelector('.js-email__input')
    const loginPasswordInput = document.querySelector('.js-password__input')
    const loginForm = document.querySelector('.js-login__form-container');
    const loginLink = document.querySelector('.js-login__link');
    
    function showLoginForm() {
      layoutOverlay.classList.add('show');
    }
    function hideLoginForm() {
      layoutOverlay.classList.remove('show');
    }
    function validateEmail(){
        var mailFormat=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!loginEmailInput.value.match(mailFormat) || loginPasswordInput.value ==='' || loginPasswordInput.value === null){
            alert('Check your Log in fields again please!')
        }
    }

    loginBtn.addEventListener('click', showLoginForm)
    darkLayout.addEventListener('click', hideLoginForm)
    loginBtnSubmit.addEventListener('click', validateEmail)
    })
    return <div>
    <header id='header'>
        <div className="grid wide">
            <div className="row">
                <div className="column l-3 header-logo-container">
                    <div className="header-logo">
                        <a href="#" className="header-logo__link">CDC Auction</a>
                    </div>
                </div>
                <div className="column l-6 header__search-container">
                    <input type="text" className="header__search" placeholder="Nhập sản phẩm bạn muốn tìm kiếm" />
                </div>
                <div className="column l-3 header-choices">
                    <div className="column l-4 header-choice__btn">
                        <a href="#" className="link header-choice__link header-search__btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='header-choice__icon' />
                            {/* <i className="fa-solid fa-magnifying-glass header-choice__icon"></i> */}
                        </a>
                    </div>
                    <div className="column l-4 header-choice__btn">
                        <a href="#" className="link header-choice__link header-cart__btn">
                            <FontAwesomeIcon icon={faCartShopping} className='header-choice__icon' />
                        </a>
                    </div>
                    <div className="column l-4 header-choice__btn header-user__container">
                        <a href="#" className="link header-choice__link header-user__btn">
                            <FontAwesomeIcon icon={faUser} className='header-choice__icon' />
                            {/* <i className="fa-regular fa-user header-choice__icon"></i> */}
                        </a>
                        <div className="header-user-choice__list">
                            <div className="header-user-choice-up">
                                <div className="header-user-greeting">
                                    <h3 className="header-user__heading">Hello!</h3>
                                    <p className="header-user__description">Access account and manage order</p>
                                </div>
                                <div className="header-user-login__btn-container">
                                    <button className="header-user-login__btn js-login__btn"
                                        >Login/Sign up</button>
                                </div>
                            </div>
                            <div className="header-user-choice-bottom">
                                <a href="#" className="header-user-order__btn">Orders</a>
                                <a href="#" className="header-user-order__btn">Saved products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="layout__overlay js-layout__overlay">
        <div className="dark-layout js-dark-layout"></div>
        <div className="login__form-container js-login__form-container">
            <form action="submit" className="login__form">

                <h1 className="login__header">Log in</h1>
                <h3 className="login-signup">New member? <a href="#" className="signup__link"><strong>Sign up
                            here!</strong></a>
                </h3>
                <div className="column l-12 input__heading email__heading">Enter your email</div>
                <input type="email" className="column l-12 login__input email__input js-email__input" placeholder="a123@email.com"/>
                <div className="column l-12 input__heading password__heading">Enter your password</div>
                <input type="password" className="column l-12 login__input password__input js-password__input"/>

            </form>
            <a href="#" className="forgot-password__link">Forgot password?</a>
            <button className="column l-12 btn primary-btn log-in__btn js-login__btn-submit">Log In</button>
            <div className="sign-up-google__heading">or sign up with</div>
            <button className="column l-6 btn sign-up-google__btn">
                <i className="fa-brands fa-google"></i>
                SIGN UP WITH GOOGLE
            </button>
        </div>
    </div>
</div>;
}

export default Header;