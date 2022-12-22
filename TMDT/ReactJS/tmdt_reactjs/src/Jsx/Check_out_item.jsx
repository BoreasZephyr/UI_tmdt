import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Cart.css';
import '../Css/Check_out_item.css';
import Header from './Header';
import SpecialBtn from './Special_btn';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
function CheckOutItem(prop) {
  return (
    <>
      <div className="column l-12 check-out-item-container">
        <div className="row">
          <div className="column l-4 check-out-item__img-container">
            <div
              className="check-out-item__img"
              style={{ backgroundImage: `url(${prop.imgURL})` }}
            ></div>
          </div>
          <div className="column l-8 check-out-item-content">
            <h1 className="check-out-item__heading">{prop.heading}</h1>
            <div className="check-out-item-description">{prop.description}</div>
            <div className="check-out-item-price">${prop.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOutItem;
