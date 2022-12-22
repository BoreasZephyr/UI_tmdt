import { React, useEffect } from 'react';

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
import { useGetMyProductsQuery } from '../services/productApis';

function MyProduct() {
  const { data: myProductsData, isFetching } = useGetMyProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ProfileNavbar No="nav__link-6" />
      <div className="grid wide" style={{ position: 'relative' }}>
        <div className="row">
          <div className="column l-10 profile-main-content">
            {myProductsData?.products.map((product, i) => (
              <MyProductItem
                key={i}
                url={product?.mainImage.url}
                className="my-product-item"
                heading={product?.name}
                description={product?.description}
                proId={product?._id}
              />
            ))}
          </div>
        </div>
        <Link to="/add-product">
          <SpecialBtn className="Add-product__btn" value="Add product" />
        </Link>
      </div>
    </>
  );
}
export default MyProduct;
