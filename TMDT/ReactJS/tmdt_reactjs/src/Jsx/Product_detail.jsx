import React, { Component, useEffect, useRef, useState } from 'react';

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
  useBidProductMutation,
} from '../services/productApis';
import { useParams } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Completionist } from './EndTime';

function ProductDetail({ user, showLoginForm }) {
  const { id } = useParams();

  const bidInput = useRef(null);

  // apis call
  const { data: productData, isFetching: isFetchingProduct } =
    useGetProductQuery(id);

  const { data: relativeProducts, isFetching: isFetchingRelativeProduct } =
    useGetProductsQuery({ limit: 4, category: productData?.product.category });

  const [bidProduct, { isLoading }] = useBidProductMutation();

  // Bid formData, default is 0 (number)
  const [bidData, setBidData] = useState({
    bidPrice: 0,
  });

  useEffect(() => {
    if (!isFetchingProduct)
      setBidData((prev) => ({
        ...prev,
        bidPrice: productData?.product.currentPrice + productData?.product.step,
      }));
  }, [productData, isFetchingProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBidChange = (e) => {
    const numberRegex = /^[0-9]*$/;
    // e.target.value is string, js comparator is absolute, so that engine converts to same data type (number)
    if (e.target.value.match(numberRegex) && e.target.value < 10000000000) {
      setBidData((prev) => ({ ...prev, bidPrice: parseInt(e.target.value) }));
    }
  };

  const handleBidPrice = async () => {
    try {
      console.log('bid run');
      const res = await bidProduct({ id, formData: bidData });

      // Check bid error
      if (res?.error) {
        const {
          error: { data },
        } = res;
        alert(data.message);
      } else {
        alert(`Place $${bidData.bidPrice} for product success`);
      }
    } catch (error) {}
  };

  return (
    <div>
      {/* Header */}
      <div className="grid wide">
        {/* Product info */}
        <div className="row">
          <div className="col l-12 product-info-container">
            <div className="row">
              <div className="col l-6 product__img-container">
                <div className="row">
                  <div className="col l-3 product__img-slide-container">
                    <div
                      className="product__img-slide product__img-slide2"
                      style={{
                        backgroundImage: `url(${productData?.product?.subImage1?.url})`,
                      }}
                    />
                    <div
                      className="product__img-slide product__img-slide2"
                      style={{
                        backgroundImage: `url(${productData?.product?.subImage2?.url})`,
                      }}
                    />
                    <div
                      className="product__img-slide product__img-slide2"
                      style={{
                        backgroundImage: `url(${productData?.product?.subImage3?.url})`,
                      }}
                    />                    
                  </div>
                  <div
                    className="col l-9 product__img"
                    style={{
                      backgroundImage: `url(${productData?.product?.mainImage.url})`,
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
                    Curent price:{' '}
                    <strong>
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(productData?.product.currentPrice)}
                    </strong>
                  </div>
                  <div className="product-price">
                    Price holder:{' '}
                    <strong>
                      {productData?.product.priceHolder ? (
                        user &&
                        user._id === productData?.product.priceHolder._id ? (
                          'You'
                        ) : (
                          <>
                            {productData?.product.priceHolder.firstName}{' '}
                            {productData?.product.priceHolder.lastName}
                          </>
                        )
                      ) : (
                        'No current price holder'
                      )}
                    </strong>
                  </div>
                  <div className="product-time">
                    Time left:&nbsp;
                    <Countdown
                      date={Date.parse(productData?.product.endTime)}
                      daysInHours={true}
                      key={productData?.product._id}
                    >
                      <Completionist />
                    </Countdown>
                  </div>
                </div>
                <div className="product-bid-container">
                  <div className="product-bid__header">
                    <div className="product-bid__heading">Bid now</div>
                    <div className="product-min-bid">
                      Minimum Step price:{' '}
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
                      ref={bidInput}
                      className="product-bid__input"
                      placeholder="$0.00"
                      onChange={handleBidChange}
                      value={bidData.bidPrice ? bidData.bidPrice : ''}
                    />
                    <SpecialBtn
                      className="product-bid__btn"
                      value="Place bid"
                      onClick={!user ? showLoginForm : handleBidPrice}
                      isDisabled={isLoading}
                    />
                    {/* <button class="btn primary-btn product-bid__btn">Place bid</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l-12 product-description-container">
            <div className="row">
              <div className="col l-9 product-description">
                <h3 className="product-description__heading">
                  {productData?.product.name}
                </h3>
                <p className="product-description-content">
                  {productData?.product.description}
                </p>
              </div>
              <div
                className="col l-3 product-description__img"
                style={{
                  backgroundImage: `url(${productData?.product.mainImage.url})`,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* Product other auction */}
        <div className="col l-12 product-other-auction-cotainer">
          <div className="row">
            <div className="col l-12 product-other-auction__header">
              <h2 className="product-other-auction__heading">Other products</h2>
            </div>
          </div>
          <div className="row">
            {relativeProducts?.products
              ?.filter((product) => product._id !== id)
              .map((product, i) => (
                <ProductItem key={i} product={product} />
              ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
