import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';

function Top5(props) {
  return (
    <div className="">
      <div className="productItem__info">
        <div className="productItem__name">Casio-MTP-VT01L-2B</div>
      </div>
      <div
        className="productItem__img"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
      <div className="productItem__info">
        <div className="productItem__name">5.000 $</div>
      </div>
      <div className="productItem__info">
        <div className="productItem__date-remain">00H : 00M : 00S</div>
      </div>
    </div>
  );
}

export default Top5;
