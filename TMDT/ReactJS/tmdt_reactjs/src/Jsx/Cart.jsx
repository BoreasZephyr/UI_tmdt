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
import { Link, useNavigate } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Top5 from './Top5';
import { useGetCartQuery } from '../services/cartApis';

function Cart() {
  const navigate = useNavigate();

  const { data: cartsData, isFetching: isFetchingCarts } = useGetCartQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="grid wide">
        <h1 className="cart__heading">Your cart</h1>
        <div className="column l-5 cart-container">
          {!isFetchingCarts && cartsData?.carts.length ? (
            <>
              {cartsData?.carts.map((cart, i) => (
                <Link to={`/products/${cart?.product}`} key={i} className="row mb-3">
                  <CartItem
                    heading={cart.name}
                    price={cart.price}
                    imgURL={cart?.image.url}
                  />
                </Link>
              ))}
              <Link to="/check-out">
                <SpecialBtn className="cart-payment__btn" value="Payment" />
              </Link>
            </>
          ) : (
            <div className="row">
              <h3 className="no-item">No items</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
