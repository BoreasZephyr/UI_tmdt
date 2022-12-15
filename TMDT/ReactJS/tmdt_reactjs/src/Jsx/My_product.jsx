import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/My_product.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import ProfileNavbar from './Profile_navbar';
import MyProductItem from './My_product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';

function MyProduct() {
  return (
    <>
      <Header />
      <ProfileNavbar />
      <div className="grid wide" style={{ position: 'relative' }}>
        <div className="row">
          <div className="column l-10 profile-main-content">
            <MyProductItem
              url="https://randomwordgenerator.com/img/picture-generator/55e1d6434c57aa14f1dc8460962e33791c3ad6e04e5074417c2f7dd59f4ac1_640.jpg"
              className="my-product-item"
              heading="Heading"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <MyProductItem
              url="https://randomwordgenerator.com/img/picture-generator/55e1dd43435bab14f1dc8460962e33791c3ad6e04e507441722872d6954bcd_640.jpg"
              className="my-product-item"
              heading="Something"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <MyProductItem
              url="https://randomwordgenerator.com/img/picture-generator/54e4d14b4f56ad14f1dc8460962e33791c3ad6e04e507440752f78d09548c4_640.jpg"
              className="my-product-item"
              heading="Heading gi do"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
        </div>
        <SpecialBtn className="Add-product__btn" value="Add product" />
      </div>
    </>
  );
}
export default MyProduct;
