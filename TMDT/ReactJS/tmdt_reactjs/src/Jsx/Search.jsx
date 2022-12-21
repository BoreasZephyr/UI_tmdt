import React, { Component, useState, useRef, useEffect } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Search.css';
import Footer from './Footer';
import ProductItem from './Product_item';
import 'bootstrap/dist/js/bootstrap.min.js';
import SpecialBtn from './Special_btn';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productApis';
import { useGetCategoriesQuery } from '../services/categoryApis';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(false);
  const [page, setPage] = useState(1);

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

  // api calls to get products
  const { data: productsData, isFetching } = useGetProductsQuery({
    keyword: searchParams.get('keyword'),
    sortEnd: sort,
    category: brand.id,
    page,
    minPrice: priceRange.minPrice,
    maxPrice: priceRange.maxPrice,
  });

  // api get categories
  const { data: categoriesData, isFetching: isFetchingCategory } =
    useGetCategoriesQuery();

  // reset filter when search change
  useEffect(() => {
    setBrand((prev) => ({ ...prev, id: '', name: 'Brand' }));
    setPriceRange((prev) => ({ ...prev, minPrice: '', maxPrice: '' }));
  }, [searchParams]);

  // handle about to end clicking
  const handleAboutToEndClick = () => {
    setSort((prev) => !prev);
  };

  // change category dropdown
  const handleChangeCate = (e) => {
    setBrand((prev) => ({
      ...prev,
      id: e.target.id,
      name: e.target.innerText,
    }));
    setPage(1);
  };

  // change price dropdown
  const handlePriceChange = ({ minPrice, maxPrice }) => {
    setPriceRange((prev) => ({ ...prev, minPrice, maxPrice }));
    setPage(1);
  };

  // Change page handle
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  }

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
      {!isFetching ? (
        <nav className="pagination-container">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(productsData?.filteredProductsCount / productsData?.resPerPage)}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </nav>
      ) : (
        <></>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Search;
