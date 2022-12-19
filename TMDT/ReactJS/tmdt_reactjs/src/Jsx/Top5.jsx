import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import { Completionist } from './EndTime';
// const Completionist = () => <span>You are good to go!</span>;

function Top5({ product }) {
  return (
    <Link
      to={`/products/${product?._id}`}
    >
      <div style={{ margin: '0 8px' }}>
        <div className="productItem__info">
          <div className="productTop5__name">{product?.name}</div>
        </div>
        <div
          className="productItem__img"
          style={{ backgroundImage: `url(${product?.images[0].url})` }}
        ></div>
        <div className="productItem__info">
          <div className="productItem__name">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product?.currentPrice)}
          </div>
        </div>
        <div className="productItem__info">
          <div className="productItem__date-remain">
            <Countdown date={Date.parse(product?.endTime)} daysInHours={true} key={product?._id}>
              <Completionist />
            </Countdown>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Top5;
