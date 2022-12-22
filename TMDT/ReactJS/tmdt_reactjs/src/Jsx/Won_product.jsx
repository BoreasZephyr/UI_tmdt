import { React, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Won_product.css';
import '../Css/Won_product_item.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import ProfileNavbar from './Profile_navbar';
import MyProductItem from './My_product_item';
import WonProductItem from './Won_product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import { useGetWonProductsQuery } from '../services/productApis';

function WonProduct() {
  const { data: wonProductsData, isFetching } = useGetWonProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ProfileNavbar No="nav__link-4" />
      <div className="grid wide" style={{ position: 'relative' }}>
        <div className="row">
          <div className="column l-10 profile-main-content">
            {wonProductsData?.products.length ? (
              wonProductsData?.products.map((product, i) => (
                <WonProductItem
                  key={i}
                  url={product?.mainImage.url}
                  className="my-product-item"
                  heading={product?.name}
                  description={product?.description}
                  proId={product?._id}
                />
              ))
            ) : (
              <div className="grid wide">
                <div className="row">
                  <div className="column l-10 profile-main-content">
                    <h1 className="user-score">You haven't won any products</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default WonProduct;
