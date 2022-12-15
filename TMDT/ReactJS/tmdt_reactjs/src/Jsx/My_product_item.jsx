import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/My_product_item.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import ProfileNavbar from './Profile_navbar';

function MyProductItem(props) {
  return (
    <>
      <Link
        to="/ViewMyProduct"
        className="column l-12 my-product-item-container"
      >
        <div
          className={`column l-2 my-product-item__img ${props.className}`}
          style={{
            backgroundImage: `url(${props.url})`,
          }}
        ></div>
        <div className="column l-8 my-product-info-container">
          <h3 className="my-product-heading">{props.heading}</h3>
          <p className="my-product-description">{props.description}</p>
        </div>
        <div className="column l-2 view-my-product-item__btn-container">
          <SpecialBtn className="view-my-product-item__btn" value="View" />
        </div>
      </Link>
    </>
  );
}

export default MyProductItem;
