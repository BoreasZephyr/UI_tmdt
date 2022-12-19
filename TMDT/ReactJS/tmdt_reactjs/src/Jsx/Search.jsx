import React, { Component } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Search.css';
import Footer from './Footer';
import SpecialBtn from './Special_btn';
import ProductItem from './Product_item';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productApis';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: productsData, isFetching } = useGetProductsQuery({ keyword: searchParams.get('keyword') });

  return (
    <div>
      <div className="grid wide">
        <div className="row">
          <div className=" dropdown sort-container sort-brand-container">
            <a
              className="btn btn-secondary dropdown-toggle sort__heading sort-brand__heading"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brand
            </a>

            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink sort-container sort-brand__container"
            >
              <li>
                <a
                  className="dropdown-item sort__item sort-brand__item"
                  href="#"
                >
                  Louis Vuitton
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-brand__item"
                  href="#"
                >
                  Rolex
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-brand__item"
                  href="#"
                >
                  Citizen
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-brand__item"
                  href="#"
                >
                  Casio
                </a>
              </li>
            </ul>
          </div>

          <div className=" dropdown sort-container sort-price-container">
            <a
              className="btn btn-secondary dropdown-toggle sort__heading sort-price__heading"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </a>

            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink sort-price__list"
            >
              <li>
                <a
                  className="dropdown-item sort__item sort-price__item"
                  href="#"
                >
                  100 - 400$
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-price__item"
                  href="#"
                >
                  400 - 1000$
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-price__item"
                  href="#"
                >
                  1000 - 5000$
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item sort__item sort-price__item"
                  href="#"
                >
                  Over 5000$
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropdown about-to-end__btn-container">
            <a
              className="btn btn-secondary dropdown-toggle about-to-end__btn"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About to end
            </a>
          </div>
          <div className=" dropdown go__btn-container">
            <a
              className="btn primary-btn btn-secondary dropdown-toggle go__btn"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Go
            </a>
          </div>
        </div>
      </div>
      {/* Product list */}
      <div className="grid wide">
        <div className="row">
          {productsData?.products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Search;
