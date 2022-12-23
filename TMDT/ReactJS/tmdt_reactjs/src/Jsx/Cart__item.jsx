import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Cart__item.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';

function CartItem(prop) {
  return (
    <>
      <div className="column l-12 cart-item">
        <div className="row">
          <div className="column l-3 cart__img-container">
            <div
              className="cart__img"
              style={{ backgroundImage: `url(${prop.imgURL})` }}
            ></div>
          </div>
          <div className="column l-8 cart-content-container">
            <h3 className="cart-item__heading">{prop.heading}</h3>
            <span className="cart-item-price">
              {' '}
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(prop.price)}
            </span>
            <div className="cart-item-time-left">Ended</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItem;
