import React from 'react';
import { Link } from 'react-router-dom';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';

function Top5({ product }) {
  return (
    <Link
      to={`/Products/${product?._id}`}
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
          <div className="productItem__date-remain">00H : 00M : 00S</div>
        </div>
      </div>
    </Link>
  );
}

export default Top5;
