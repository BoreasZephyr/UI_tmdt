import React, { Component } from 'react';


import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import {Carousel, CarouselItemProps} from 'react-bootstrap'


function Home(){
    return <div>
    <Header />
    <div className="grid wide">
        <div id="carouselExampleIndicators" className="carousel slide  home__slider" data-bs-ride="carousel">
            <div className="carousel-indicators slider-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                    className="active slider-indicators__btn" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2" className="slider-indicators__btn"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3" className="slider-indicators__btn"></button>
            </div>

            <div className="row carousel-inner ">
                <div className="carousel-item active  slider-content__container">
                    <div className="row">
                        <div className="column l-8 slider-content slider-content-left">
                            <div className="row slider-content__header-container">
                                <h2 className="column l-12 slider-content__header slider-content__header-1">Classic
                                    series
                                </h2>
                                <h2 className="column l-12 slider-content__header slider-content__header-2">Time with
                                    perfection.
                                    You choose</h2>
                                <SpecialBtn className='slider__btn' value='Start exploring' />
                            </div>
                        </div>

                        <div style={{backgroundImage:
                            `url(https://randomwordgenerator.com/img/picture-generator/57e6d3404f56af14f1dc8460962e33791c3ad6e04e507440762a7cd49e45c4_640.jpg)`}}
                            className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                            alt="...">

                        </div>
                    </div>
                </div>
                <div className="carousel-item  slider-content__container">
                    <div className="row">
                        <div className="column l-8 slider-content slider-content-left">
                            <div className="row slider-content__header-container">
                                <h2 className="column l-12 slider-content__header slider-content__header-1">Classic
                                    series
                                </h2>
                                <h2 className="column l-12 slider-content__header slider-content__header-2">Time with
                                    perfection.
                                    You choosse</h2>
                                <SpecialBtn className='slider__btn' value='Start exploring' />
                            </div>
                        </div>

                        <div style={{backgroundImage:
                            `url(https://randomwordgenerator.com/img/picture-generator/55e6d7424250b10ff3d8992cc12c30771037dbf85257714d742d7dd0924a_640.jpg)`}}
                            className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                            alt="...">

                        </div>
                    </div>
                </div>
                <div className="carousel-item  slider-content__container">
                    <div className="row">
                        <div className="column l-8 slider-content slider-content-left">
                            <div className="row slider-content__header-container">
                                <h2 className="column l-12 slider-content__header slider-content__header-1">Classic
                                    series
                                </h2>
                                <h2 className="column l-12 slider-content__header slider-content__header-2">Time
                                    with
                                    perfection.
                                    You choossse</h2>
                                <SpecialBtn className='slider__btn' value='Start exploring' />
                            </div>
                        </div>
                        <div style={{backgroundImage:
                            `url(https://randomwordgenerator.com/img/picture-generator/53e8d3424257b10ff3d8992cc12c30771037dbf85254794e702673dd9e4b_640.jpg)`}}
                            className="d-block w-100 column l-4 slider-content slider-content-right slider-content__img"
                            alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="grid wide">
        <div className="row">
            <div class="product-container">
                <div className="product-item__header">
                    <div className="column l-10 product-item__header-left">
                        <h3 className="product__heading">Live auction</h3>
                        <p className="product__description">
                            Explore on the best bidding watches marketplace.
                            <br />
                            We want to be a part of your smile, success and future growth.
                        </p>
                    </div>
                    <div className="product-item__header-right">
                        <SpecialBtn className='product-item__header-btn' value='View all' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="grid wide">
        <div className="row">
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e3d04b4951af14f1dc8460962e33791c3ad6e04e50744172287ad29448c7_640.jpg'/>
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/55e4d4414856ae14f1dc8460962e33791c3ad6e04e50744172287ed39645c3_640.jpg'/>
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/53e2d6414255af14f1dc8460962e33791c3ad6e04e50744075277cd39e48c3_640.jpg'/>
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e9d447425aae14f1dc8460962e33791c3ad6e04e5074417c2f7cd39e4dc4_640.jpg'/>
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e1d1434951b10ff3d8992cc12c30771037dbf852547848702e7ed19f4c_640.jpg'/>
            <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e3d0434c54a414f1dc8460962e33791c3ad6e04e50744172287ed2904cc1_640.jpg'/>
        </div>
    </div>
    <Footer />
    {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script> */}
        
</div>
}
export default Home;