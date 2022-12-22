import { React, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Cart.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import CartItem from './Cart__item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Top5 from './Top5';
import { useGetCartQuery } from '../services/cartApis';

function Cart() {
  const { data: carts, isFetching: isFetchingCarts } = useGetCartQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="grid wide">
        <h1 className="cart__heading">Your cart</h1>
        <div className="column l-5 cart-container">
          {!isFetchingCarts && carts.length ? (
            <>
              {carts.map((cart, i) => (
                <div key={i} className="row">
                  <CartItem
                    heading={cart.name}
                    price={cart.price}
                    imgURL={cart.image}
                  />
                  <SpecialBtn className="cart-payment__btn" value="Payment" />
                </div>
              ))}
            </>
          ) : (
            <div className="row">
              <CartItem
                heading="Casio"
                price="5000"
                imgURL="https://randomwordgenerator.com/img/picture-generator/5ee3dc414954b10ff3d8992cc12c30771037dbf85254794e732f7ad7934e_640.jpg"
              />
              <Link to="/check-out">
                <SpecialBtn className="cart-payment__btn" value="Payment" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
