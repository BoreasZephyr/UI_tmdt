import React, { Component, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Product_detail.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import {
  useGetProductQuery,
  useGetProductsQuery,
} from '../services/productApis';
import { useParams } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Completionist } from './EndTime';

function ProductDetail() {
  const { id } = useParams();

  const { data: productData, isFetching: isFetchingProduct } =
    useGetProductQuery(id);

  const { data: relativeProducts, isFetching: isFetchingRelativeProduct } =
    useGetProductsQuery({ limit: 3, category: productData?.product.category });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="grid wide">
        {/* Product info */}
        <div className="row">
          <div className="col l-12 product-info-container">
            <div className="row">
              <div className="col l-6 product__img-container">
                <div className="row">
                  <div className="col l-3 product__img-slide-container">
                    {productData?.product.images.map(({ url }, i) => (
                      <div
                        key={i}
                        className="product__img-slide product__img-slide2"
                        style={{
                          backgroundImage: `url(${url})`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div
                    className="col l-9 product__img"
                    style={{
                      backgroundImage: `url(${productData?.product.images[0].url})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col l-6 product-info">
                <div className="product__header">
                  <h3 className="product-info__heading">
                    {productData?.product.name}
                  </h3>
                  <p className="product-info-description">
                    {productData?.product.description}
                  </p>
                </div>
                <div className="product-price-time-container">
                  <div className="product-price">
                    Biding price:{' '}
                    <strong>
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(productData?.product.currentPrice)}
                    </strong>
                  </div>
                  <div className="product-time">Time left:&nbsp;
                    <Countdown date={Date.parse(productData?.product.endTime)} daysInHours={true} key={productData?.product._id}>
                      <Completionist />
                    </Countdown>
                  </div>
                </div>
                <div className="product-bid-container">
                  <div className="product-bid__header">
                    <div className="product-bid__heading">Bid now</div>
                    <div className="product-min-bid">
                      Minium Bid amount:{' '}
                      <span className="product-min-bid-value">
                        {Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(productData?.product.step)}
                      </span>
                    </div>
                  </div>
                  <div className="product-bid">
                    <input
                      type="text"
                      className="product-bid__input"
                      placeholder="$0.00"
                    />
                    <SpecialBtn
                      className="product-bid__btn"
                      value="Place bid"
                    />
                    {/* <button class="btn primary-btn product-bid__btn">Place bid</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product other auction */}
        <div className="row">
          {relativeProducts?.products
            ?.filter((product) => product._id !== id)
            .map((product, i) => (
              <ProductItem key={i} product={product} />
            ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
