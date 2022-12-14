import React, { Component } from 'react';


import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Search.css';
import Header from './Header';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Search(){
    return <div>
        {/* Header */}
        <Header />
        {/* Nav bar */}
        <div className="grid wide">
        <div className="row">
            <div className=" dropdown sort-container sort-brand-container">
                <a className="btn btn-secondary dropdown-toggle sort__heading sort-brand__heading" href="#" role="button"
                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Brand
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink sort-container sort-brand__container">
                    <li><a className="dropdown-item sort__item sort-brand__item" href="#">Louis Vuitton</a></li>
                    <li><a className="dropdown-item sort__item sort-brand__item" href="#">Rolex</a></li>
                    <li><a className="dropdown-item sort__item sort-brand__item" href="#">Citizen</a></li>
                    <li><a className="dropdown-item sort__item sort-brand__item" href="#">Casio</a></li>
                </ul>
            </div>

            <div className=" dropdown sort-container sort-price-container">
                <a className="btn btn-secondary dropdown-toggle sort__heading sort-price__heading" href="#" role="button"
                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Price
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink sort-price__list">
                    <li><a className="dropdown-item sort__item sort-price__item" href="#">100 - 400$</a></li>
                    <li><a className="dropdown-item sort__item sort-price__item" href="#">400 - 1000$</a></li>
                    <li><a className="dropdown-item sort__item sort-price__item" href="#">1000 - 5000$</a></li>
                    <li><a className="dropdown-item sort__item sort-price__item" href="#">Over 5000$</a></li>
                </ul>
            </div>
            <div className=" dropdown about-to-end__btn-container">
                <a className="btn btn-secondary dropdown-toggle about-to-end__btn" href="#" role="button"
                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    About to end
                </a>
            </div>
            <div className=" dropdown go__btn-container">
                <a className="btn primary-btn btn-secondary dropdown-toggle go__btn" href="#" role="button"
                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Go
                </a>
            </div>
        </div>
    </div>
        {/* Product list */}
        <div className="grid wide">
            <div className="row">
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/57e8d34b4a57ad14f1dc8460962e33791c3ad6e04e50744172297cdd9349cc_640.jpg' />
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e1dd404c51ab14f1dc8460962e33791c3ad6e04e5074417d2e7ed6924bc4_640.jpg'/>
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/57e1dd424d51ac14f1dc8460962e33791c3ad6e04e50744172297cdc9f4fc7_640.jpg'/>
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/54e7d1404857a814f1dc8460962e33791c3ad6e04e5074417c2d78d19e44cd_640.jpg'/>
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/57e2d1454256ac14f1dc8460962e33791c3ad6e04e507749772f79dd9f4ec6_640.jpg'/>
                <ProductItem url='https://randomwordgenerator.com/img/picture-generator/55e0dd424357ac14f1dc8460962e33791c3ad6e04e507441722a72d3904ccc_640.jpg'/>
            </div>
        </div>
        {/* Footer */}
        <Footer />
    </div>
}

export default Search;