import React, { Component, useState, useRef, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Search.css';
import Footer from './Footer';
import ProductItem from './Product_item';
import 'bootstrap/dist/js/bootstrap.min.js';
import SpecialBtn from './Special_btn';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productApis';
import { useGetCategoriesQuery } from '../services/categoryApis';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(false);

  const priceArr = [
    {
      minPrice: 100,
      maxPrice: 400,
    },
    {
      minPrice: 400,
      maxPrice: 1000,
    },
    {
      minPrice: 1000,
      maxPrice: 5000,
    },
    {
      minPrice: 5000,
      maxPrice: null,
    },
  ];

  const [brand, setBrand] = useState({
    id: '',
    name: 'Brand',
  });

  const [priceRange, setPriceRange] = useState({
    minPrice: '',
    maxPrice: '',
  });

  const brandLi = useRef(null);

  useEffect(() => {
    console.log('change');
    setBrand((prev) => ({ ...prev, id: '', name: 'Brand' }));
    setPriceRange((prev) => ({ ...prev, minPrice: '', maxPrice: '' }));
  }, [searchParams]);

  const { data: productsData, isFetching } = useGetProductsQuery({
    keyword: searchParams.get('keyword'),
    sortEnd: sort,
    category: brand.id,
    minPrice: priceRange.minPrice,
    maxPrice: priceRange.maxPrice,
  });

  const { data: categoriesData, isFetching: isFetchingCategory } =
    useGetCategoriesQuery();

  const handleAboutToEndClick = () => {
    setSort((prev) => !prev);
  };

  const handleChangeCate = (e) => {
    console.log(e.target.id);
    setBrand((prev) => ({
      ...prev,
      id: e.target.id,
      name: e.target.innerText,
    }));
  };

  const handlePriceChange = ({ minPrice, maxPrice }) => {
    setPriceRange((prev) => ({ ...prev, minPrice, maxPrice }));
  };

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
              {brand.name}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink sort-container sort-brand__container"
            >
              {categoriesData?.categories.map((category, i) => (
                <li key={i}>
                  <a
                    id={category?._id}
                    ref={brandLi}
                    className="dropdown-item sort__item sort-brand__item"
                    onClick={handleChangeCate}
                  >
                    {category?.name}
                  </a>
                </li>
              ))}
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
              {priceRange.minPrice
                ? !priceRange.maxPrice
                  ? `Above $${priceRange.minPrice}`
                  : `$${priceRange.minPrice} - $${priceRange.maxPrice}`
                : 'Price'}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink sort-price__list"
            >
              {priceArr.map((range, i) => (
                <li key={i}>
                  <a
                    className="dropdown-item sort__item sort-price__item"
                    onClick={() => handlePriceChange(range)}
                  >
                    {!range.maxPrice
                      ? `Above $${range.minPrice}`
                      : `$${range.minPrice} - $${range.maxPrice}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="about-to-end__btn-container"
            onClick={handleAboutToEndClick}
          >
            <a
              className="btn btn-secondary about-to-end__btn"
              role="button"
              // id="dropdownMenuLink"
              // data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              End time sort
            </a>
          </div>
          {/* <SpecialBtn className="product-bid__btn go__btn" value="Go" /> */}
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
