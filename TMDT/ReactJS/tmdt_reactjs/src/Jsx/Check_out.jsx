import { React, useEffect, useState } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Cart.css';
import '../Css/Check_out.css';
import Header from './Header';
import SpecialBtn from './Special_btn';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, useParams } from 'react-router-dom';

import CheckOutItem from './Check_out_item';
import { useDeleteCartMutation, useGetCartByIdQuery } from '../services/cartApis';

import StripeCheckout from 'react-stripe-checkout';
import { useNewOrderMutation } from '../services/orderApis';

function CheckOut() {
  const { id } = useParams();

  const { data: CartByIdData, isFetching: isFetchingCart } = useGetCartByIdQuery(id)
  const [deleteCart] = useDeleteCartMutation(id);

  const [createOrder] = useNewOrderMutation();

  const [districts, setDistricts] = useState({
    'District 1': 15,
    'District 2': 9,
    'District 3': 15,
    'District 4': 16,
    'District 5': 19,
    'District 6': 21,
    'District 7': 20,
    'District 8': 26,
    'District 9': 5,
    'District 10': 18,
    'District 11': 19,
    'District 12': 14,
    'Thu Duc city': 2,
    'Tan Binh': 14,
    'Binh Thanh': 9,
    'Go Vap': 10,
    'Phu Nhuan': 11,
    'Tan Phu': 15,
  });

  const [district, setDistrict] = useState({ "Thu Duc city": 2 })

  const shippingPrice = Object.values(district) * CartByIdData?.cart.price / 200;

  const hanldeClickDistrict = (key, value) => {
    const shipping = {}
    shipping[key] = value
    setDistrict(shipping)
  }

  async function onToken(token) {
    const order = {
      orderItems: [{
        name: CartByIdData?.cart.name,
        image: CartByIdData?.cart.image.url,
        price: CartByIdData?.cart.price,
        product: CartByIdData?.cart.product,
      }],
      shippingInfo: {
        district: Object.keys(district)[0],
        phoneNo: JSON.parse(localStorage.getItem('user')).phoneNumber
      },
      shippingPrice: shippingPrice,
      totalPrice: shippingPrice + CartByIdData?.cart.price,
      token,
    };

    const res = await createOrder(order);

    if (res?.error) {
      const {
        error: { data },
      } = res;
      alert(data.message);
    } else {
      alert('Paid');
      const deleteRes = await deleteCart(id);
      window.location.pathname = "/"
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <CheckOutItem
            heading={CartByIdData?.cart.name}
            description={CartByIdData?.cart.description}
            price={CartByIdData?.cart.price}
            imgURL={CartByIdData?.cart.image.url}
          />
        </div>
        <div className="row">
          <div className="column l-5 order-summary-container">
            <h2 className="order-summary__heading">ORDER SUMMARY</h2>
            <div className="row">
              <div className="column l-12 sub-total-container">
                <div className="row">
                  <h3 className="column l-10 sub-total__heading">Sub Total</h3>
                  <div className="column l-2 check-out-price sub-total-price">
                    ${CartByIdData?.cart.price}
                  </div>
                </div>
              </div>
              <div className=" column l-12 dropdown ship-container">
                <a
                  className="btn btn-secondary ship__heading"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {Object.keys(district)}
                </a>
                <ul
                  className="dropdown-menu ship__list"
                  aria-labelledby="dropdownMenuLink ship-container "
                >
                  {Object.entries(districts).map(([key, value], i) =>
                  (<li key={i}
                  >
                    <a className="dropdown-item ship__item"
                      onClick={() => hanldeClickDistrict(key, value)}
                    >
                      {key}
                    </a>
                  </li>)
                  )}
                </ul>
              </div>
              <div className="column l-12 estimated-shipping-container">
                <div className="row">
                  <h3 className="column l-10 estimated-shipping__heading">
                    Estimated shipping
                  </h3>
                  <div className="column l-2 check-out-price estimated-shipping-price">
                    ${shippingPrice}
                  </div>
                </div>
              </div>
              <div className="column l-12 estimated-total-container">
                <div className="row">
                  <h3 className="column l-10 estimated-total__heading">
                    Estimated total
                  </h3>
                  <div className="column l-2 check-out-price estimated-total-price">
                    ${shippingPrice + CartByIdData?.cart.price}
                  </div>
                </div>
              </div>
            </div>
            <StripeCheckout
              amount={(shippingPrice + CartByIdData?.cart.price) * 100}
              token={onToken}
              currency="USD"
              stripeKey="pk_test_51LhTmHDGOQhsYLL1AGMaaqbRNEB4CKIIou69IljUChMBjvkf1OQEa1SMjADKv3x9vs8Z1IOceHacX7LhfFX1ZvdU00lyYntqcX"
            >
              <SpecialBtn
                className="check-out-now__btn"
                value="CHECK OUT NOW!" />
            </StripeCheckout>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOut;
