import React, { Component } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Product_detail.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import { useEffect } from 'react';

function ProductDetail() {
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
                    <div
                      className="product__img-slide product__img-slide1"
                      style={{
                        backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/54e3d3454357a914f1dc8460962e33791c3ad6e04e50744172287ad2974dcd_640.jpg)`,
                      }}
                    ></div>
                    <div
                      className="product__img-slide product__img-slide2"
                      style={{
                        backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/gdb8e24b74514d2cd54ac5e98da0aafb1e7939a770452ceeaa0cd7e3fcf372313331d25cfede075247172ab9ea90ae7cf_640.jpg)`,
                      }}
                    ></div>
                    <div
                      className="product__img-slide product__img-slide3"
                      style={{
                        backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/g551deffc804848ef502ae952865f6ebc70a2e9c5a3bed5ea709e14b159492ea3991a9a9fac8ca423c0655dbda70d6d33_640.jpg)`,
                      }}
                    ></div>
                  </div>
                  <div
                    className="col l-9 product__img"
                    style={{
                      backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/50e9d3424c55b10ff3d8992cc12c30771037dbf85254794e72287fdc964c_640.jpg)`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col l-6 product-info">
                <div className="product__header">
                  <h3 className="product-info__heading">
                    Casio-MTP-VT01L-2B-1
                  </h3>
                  <p className="product-info-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium architecto optio veritatis nulla reprehenderit
                    libero vel vitae placeat dolorem qui. Provident amet rem,
                    placeat nihil vero dignissimos dicta quo beatae.
                  </p>
                </div>
                <div className="product-price-time-container">
                  <div className="product-price">
                    Biding price: <strong>550$</strong>
                  </div>
                  <div className="product-time">Time left: 16:30:28</div>
                </div>
                <div className="product-bid-container">
                  <div className="product-bid__header">
                    <div className="product-bid__heading">Bid now</div>
                    <div className="product-min-bid">
                      Minium Bid amount:{' '}
                      <span className="product-min-bid-value">200</span>$
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
          <ProductItem url="https://randomwordgenerator.com/img/picture-generator/54e6dd414e5ba414f1dc8460962e33791c3ad6e04e507440742a7ed0944ecc_640.jpg" />
          <ProductItem url="https://randomwordgenerator.com/img/picture-generator/55e6d74a4b53a514f1dc8460962e33791c3ad6e04e507440742e7dd59245c0_640.jpg" />
          <ProductItem url="https://randomwordgenerator.com/img/picture-generator/53e8d7454f5bb10ff3d8992cc12c30771037dbf85257714d702672d2974e_640.jpg" />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
