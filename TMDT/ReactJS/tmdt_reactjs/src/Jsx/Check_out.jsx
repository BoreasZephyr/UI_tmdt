import { React, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Cart.css';
import '../Css/Check_out.css';
import Header from './Header';
import SpecialBtn from './Special_btn';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

import CheckOutItem from './Check_out_item';
function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="grid wide">
        <div className="row">
          <CheckOutItem
            heading="Casio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            price="500"
            imgURL="https://randomwordgenerator.com/img/picture-generator/52e4dc424e54af14f1dc8460962e33791c3ad6e04e50744172277fd0964ec3_640.jpg"
          />
          <CheckOutItem
            heading="Rô Léch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            price="1500"
            imgURL="https://randomwordgenerator.com/img/picture-generator/57e1d1434954aa14f1dc8460962e33791c3ad6e04e50744172297ed29348c6_640.jpg"
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
                    $550
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
                  District
                </a>
                <ul
                  className="dropdown-menu ship__list"
                  aria-labelledby="dropdownMenuLink ship-container "
                >
                  <li>
                    <a href="" className="dropdown-item ship__item">
                      District 1
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item ship__item">
                      District 3
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item ship__item">
                      District 5
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item ship__item">
                      Thu Duc city
                    </a>
                  </li>
                  {/* {categoriesData?.categories.map((category, i) => (
                <li key={i}>
                  <a
                    id={category?._id}
                    ref={brandLi}
                    className="dropdown-item ship__item"
                    onClick={handleChangeCate}
                  >
                    {category?.name}
                  </a>
                </li>
              ))} */}
                </ul>
              </div>
              <div className="column l-12 estimated-shipping-container">
                <div className="row">
                  <h3 className="column l-10 estimated-shipping__heading">
                    Estimated shipping
                  </h3>
                  <div className="column l-2 check-out-price estimated-shipping-price">
                    $20
                  </div>
                </div>
              </div>
              <div className="column l-12 estimated-total-container">
                <div className="row">
                  <h3 className="column l-10 estimated-total__heading">
                    Estimated total
                  </h3>
                  <div className="column l-2 check-out-price estimated-total-price">
                    $570
                  </div>
                </div>
              </div>
            </div>
            <SpecialBtn className="check-out-now__btn" value="CHECK OUT NOW!" />
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOut;
