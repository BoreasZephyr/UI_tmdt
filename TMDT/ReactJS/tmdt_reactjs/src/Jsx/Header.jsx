import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React, { Component }  from 'react';

import '../Css/Base.css'
import '../Css/Grid.css'
import '../Css/Main.css'
import '../Css/Header.css'
// import { showLoginForm } from '../Js/Index';
function Header(){
    return <header id='header'>
    <div className="grid wide">
        <div className="row">
            <div className="col l-3 header-logo-container">
                <div className="header-logo">
                    <a href="#" className="header-logo__link">CDC Auction</a>
                </div>
            </div>
            <div className="col l-6 header__search-container">
                <input type="text" className="header__search" placeholder="Nhập sản phẩm bạn muốn tìm kiếm" />
            </div>
            <div className="col l-3 header-choices">
                <div className="col l-4 header-choice__btn">
                    <a href="#" className="link header-choice__link header-search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='header-choice__icon'/>
                        {/* <i className="fa-solid fa-magnifying-glass header-choice__icon"></i> */}
                    </a>
                </div>
                <div className="col l-4 header-choice__btn">
                    <a href="#" className="link header-choice__link header-cart__btn">
                        <FontAwesomeIcon icon={faCartShopping} className='header-choice__icon'/>
                    </a>
                </div>
                <div className="col l-4 header-choice__btn header-user__container">
                    <a href="#" className="link header-choice__link header-user__btn">
                        <FontAwesomeIcon icon={faUser} className='header-choice__icon'/>
                        {/* <i className="fa-regular fa-user header-choice__icon"></i> */}
                    </a>
                    <div className="header-user-choice__list">
                        <div className="header-user-choice-up">
                            <div className="header-user-greeting">
                                <h3 className="header-user__heading">Hello!</h3>
                                <p className="header-user__description">Access account and manage order</p>
                            </div>
                            <div className="header-user-login__btn-container">
                                <button className="header-user-login__btn js-login__btn">Login/Sign up</button>
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
</header>;
}
export default Header;