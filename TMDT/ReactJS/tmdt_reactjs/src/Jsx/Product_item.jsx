import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
import SpecialBtn from './Special_btn';
import { Completionist } from './EndTime';

function ProductItem({ product }) {
  return (
    <>
      <Link
        to={`/products/${product?._id}`}
        className="productItem__container column l-4 m-6 c-12"
      >
        <div className="productItem">
          <div
            className="productItem__img"
            style={{ backgroundImage: `url(${product?.images[0]?.url})` }}
          ></div>
          <div className="productItem__info column l-12">
            <div className="productItem__name">{product?.name}</div>
            <div className="productItem__date-remain">
              <Countdown date={Date.parse(product?.endTime)} daysInHours={true} key={product?._id}>
                <Completionist />
              </Countdown>
            </div>
          </div>
          <div className="productItem-trade__info">
            <div className="productItem__price">
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(product?.currentPrice)}
            </div>
            <SpecialBtn value="Bid now" className="productItem-pay__btn" />
            {/* <button className="productItem-pay__btn btn primary-btn">Place Bid</button> */}
          </div>
        </div>
      </Link>
    </>
  );
}
export default ProductItem;
