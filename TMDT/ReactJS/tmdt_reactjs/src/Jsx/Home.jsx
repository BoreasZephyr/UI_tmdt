import React, { useEffect, useState } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, useNavigate } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Top5 from './Top5';

import {
  useGetProductsQuery,
  useGetTop5ProductsQuery,
} from '../services/productApis';

const CustomDot = ({ index, onClick, active }) => {
  return (
    <button
      onClick={() => onClick()}
      className={
        active
          ? 'slider-indicators__btn btn-top5-active active'
          : 'slider-indicators__btn inactive'
      }
      style={{ padding: '1.5px 16px', margin: '0px 2px', border: 'none' }}
    >
      {React.Children.toArray()[index]}
    </button>
  );
};

function Home() {
  const { data: top5Data, isFetching: isFetchingTop5Data } =
    useGetTop5ProductsQuery();

  const { data: productsData, isFetching } = useGetProductsQuery({});

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="grid wide">
        <div
          id="carouselExampleIndicators"
          className="carousel slide  home__slider"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators slider-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active slider-indicators__btn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="slider-indicators__btn"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="slider-indicators__btn"
            ></button>
          </div>

          <div className="row carousel-inner ">
            <div className="carousel-item active  slider-content__container">
              <div className="row">
                <div className="column l-8 slider-content slider-content-left">
                  <div className="row slider-content__header-container">
                    <h2 className="column l-12 slider-content__header slider-content__header-1">
                      Classic series
                    </h2>
                    <h2 className="column l-12 slider-content__header slider-content__header-2">
                      Time with perfection. You choose
                    </h2>
                    <SpecialBtn
                      className="slider__btn"
                      value="Start exploring"
                      onClick={() => navigate('/products')}
                    />
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/57e6d3404f56af14f1dc8460962e33791c3ad6e04e507440762a7cd49e45c4_640.jpg)`,
                  }}
                  className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                  alt="..."
                ></div>
              </div>
            </div>
            <div className="carousel-item  slider-content__container">
              <div className="row">
                <div className="column l-8 slider-content slider-content-left">
                  <div className="row slider-content__header-container">
                    <h2 className="column l-12 slider-content__header slider-content__header-1">
                      Classic series
                    </h2>
                    <h2 className="column l-12 slider-content__header slider-content__header-2">
                      Time with perfection. You choosse
                    </h2>
                    <SpecialBtn
                      className="slider__btn"
                      value="Start exploring"
                    />
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/55e6d7424250b10ff3d8992cc12c30771037dbf85257714d742d7dd0924a_640.jpg)`,
                  }}
                  className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                  alt="..."
                ></div>
              </div>
            </div>
            <div className="carousel-item  slider-content__container">
              <div className="row">
                <div className="column l-8 slider-content slider-content-left">
                  <div className="row slider-content__header-container">
                    <h2 className="column l-12 slider-content__header slider-content__header-1">
                      Classic series
                    </h2>
                    <h2 className="column l-12 slider-content__header slider-content__header-2">
                      Time with perfection. You choossse
                    </h2>
                    <SpecialBtn
                      className="slider__btn"
                      value="Start exploring"
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/53e8d3424257b10ff3d8992cc12c30771037dbf85254794e702673dd9e4b_640.jpg)`,
                  }}
                  className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                  alt="..."
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide" style={{ paddingTop: '100px' }}>
        {!isFetchingTop5Data && top5Data?.top5Products.length ? (
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            slidesToSlide={true}
            centerMode={true}
            arrows={false}
            customDot={<CustomDot />}
            // partialVisbile={true}
            dotListClass="carousel-indicators slider-indicators"
          >
            {top5Data?.top5Products.map((product, i) => (
              <Top5 key={i} product={product} />
            ))}
          </Carousel>
        ) : (
          <></>
        )}
      </div>
      <div className="grid wide">
        <div className="row">
          <div className="product-container">
            <div className="product-item__header">
              <div className="column l-10 product-item__header-left">
                <h3 className="product__heading">Live auction</h3>
                <p className="product__description">
                  Explore on the best bidding watches marketplace.
                  <br />
                  We want to be a part of your smile, success and future growth.
                </p>
              </div>
              <div className="product-item__header-right" onClick={() => navigate('/products')}>
                <SpecialBtn
                  className="product-item__header-btn"
                  value="View all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide">
        <div className="row">
          {productsData?.products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div >
  );
}
export default Home;
