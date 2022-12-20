import React, { useState, useEffect, useRef } from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Add_product.css';

import SpecialBtn from './Special_btn';
import ProfileNavbar from './Profile_navbar';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    minPrice: '',
    step: '',
    description: '',
    category: '',
    images: [],
    endTime: '',
    shortDecription: ''
  })

  const imgs = [];

  const nameInput = useRef(null);
  const minPriceInput = useRef(null);
  const stepInput = useRef(null);
  const descriptionInput = useRef(null);
  const categoryInput = useRef(null);
  const [imagesInput, setImagesInput] = useState([]);
  const endTimeInput = useRef(null);
  const shortDescriptionInput = useRef(null);

  useEffect(() => {
    // Biến input hình
    const mainImgInput = document.querySelector(
      '.js-add-product-main-img__input'
    );
    const subImgInput1 = document.querySelector(
      '.js-add-product-sub-img__input1'
    );
    const subImgInput2 = document.querySelector(
      '.js-add-product-sub-img__input2'
    );
    const subImgInput3 = document.querySelector(
      '.js-add-product-sub-img__input3'
    );

    // Biến thẻ thể hiện hình
    const mainImg = document.querySelector('.js-add-product-main__img');
    const subImg1 = document.querySelector('.js-add-product-sub__img1');
    const subImg2 = document.querySelector('.js-add-product-sub__img2');
    const subImg3 = document.querySelector('.js-add-product-sub__img3');

    // mainImg.style.backgroundImage = `url(https://randomwordgenerator.com/img/picture-generator/54e6d4454c52ab14f1dc8460962e33791c3ad6e04e507440772f7cd79144c4_640.jpg)`;

    // Bắt sự kiện click của thẻ thể hiện hình
    mainImg.onclick = () => {
      mainImgInput.click();
    };
    subImg1.onclick = () => {
      subImgInput1.click();
    };
    subImg2.onclick = () => {
      subImgInput2.click();
    };
    subImg3.onclick = () => {
      subImgInput3.click();
    };

    // Show hinh da chon
    mainImgInput.addEventListener('change', (e) => {
      const [file] = mainImgInput.files;
      var fileURL = URL.createObjectURL(file);
      //   alert(fileURL);
      if (file) mainImg.style.backgroundImage = `url(${fileURL})`;
      //   if (file) alert(fileURL);
    });
    subImgInput1.addEventListener('change', (e) => {
      const [file] = subImgInput1.files;
      var fileURL = URL.createObjectURL(file);
      if (file) subImg1.style.backgroundImage = `url(${fileURL})`;
      //   if (file) alert(fileURL);
    });
    subImgInput2.addEventListener('change', (e) => {
      const [file] = subImgInput2.files;
      var fileURL = URL.createObjectURL(file);
      if (file) subImg2.style.backgroundImage = `url(${fileURL})`;
      //   if (file) alert(fileURL);
    });
    subImgInput3.addEventListener('change', (e) => {
      const [file] = subImgInput3.files;
      var fileURL = URL.createObjectURL(file);
      if (file) subImg3.style.backgroundImage = `url(${fileURL})`;
      //   if (file) alert(fileURL);
    });
  });

  async function Validate(e) {
    e.preventDefault();
    console.log(formData);
    console.log(imagesInput)
    console.log(nameInput);
  }
  return (
    <>
      <ProfileNavbar />
      <div className="grid wide">
        <div className="row">
          <div className="column l-10 profile-main-content">
            <form onSubmit={Validate} className="add-product__form">
              <div className="row">
                <h1 className="column l-12 add-product__heading">
                  Add product
                </h1>
                <div className="column l-12 add-product-main-content">
                  <div className="row">
                    <div className="column l-3">
                      <div className="add-product__img-container">
                        <div
                          className="add-product__img add-product-main__img js-add-product-main__img"
                        ></div>
                      </div>
                    </div>
                    <div className="column l-9">
                      <div className="add-product-right">
                        <div className="add-product-header">
                          <div
                            className="row"
                            style={{ justifyContent: 'space-between' }}
                          >
                            <input
                              type="text"
                              className="column l-3 add-product__input add-product-name__input"
                              placeholder="Product name"
                              ref={nameInput}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            />
                            <input
                              type="number"
                              className="column l-2 add-product__input add-product-start-price__input"
                              placeholder="Start price"
                              datatype="currency"
                              ref={minPriceInput}
                              onChange={(e) => setFormData(prev => ({ ...prev, minPrice: e.target.value }))}
                            />
                            <input
                              type="number"
                              className="column l-2 add-product__input add-product-step-price__input"
                              placeholder="Step price"
                              datatype="currency"
                              ref={stepInput}
                              onChange={(e) => setFormData(prev => ({ ...prev, step: e.target.value }))}
                            />
                            <input
                              type="date"
                              name=""
                              className="column l-3 add-product__input add-product-date__input"
                              ref={endTimeInput}
                              onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <textarea
                            name=""
                            rows="3"
                            className="column l-12 add-product-description__input add-product-short-description__input"
                            placeholder="Short description"
                            ref={shortDescriptionInput}
                            onChange={(e) => setFormData(prev => ({ ...prev, shortDecription: e.target.value }))}
                          ></textarea>
                          <textarea
                            name=""
                            rows="5"
                            className="column l-12 add-product-description__input add-product-details-description__input"
                            placeholder="Defaults description"
                            ref={descriptionInput}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-product-bottom">
                <div className="row">
                  <div className="column l-6 add-product-sub__img-list">
                    <div className="row">
                      <div className="column l-4">
                        <div className="add-product__img-container add-product-sub__img-container">
                          <div
                            className="column add-product__img add-product-sub__img js-add-product-sub__img1"
                          ></div>
                        </div>
                      </div>
                      <div className="column l-4">
                        <div className="add-product__img-container add-product-sub__img-container">
                          <div
                            className="column add-product__img add-product-sub__img js-add-product-sub__img2"
                          ></div>
                        </div>
                      </div>
                      <div className="column l-4">
                        <div className="add-product__img-container add-product-sub__img-container">
                          <div
                            className="column add-product__img add-product-sub__img js-add-product-sub__img3"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-product__btn-container">
                <Link to="/MyProducts">
                  <button className="btn add-product__btn cancel-add-product__btn">
                    Cancel
                  </button>
                </Link>
                <SpecialBtn
                  value="Save changes"
                  type="submit"
                  className="add-product__btn add-product-save__btn"
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-main-img__input js-add-product-main-img__input"
                  style={{ display: 'none' }}
                  // ref={(img) => {
                  //   setImagesInput(prev => ({ ...prev }));
                  // }}
                  onChange={(e) => {
                    setImagesInput(prev => ([...prev, e.target]));
                    setFormData(prev => ({ ...prev, images: imagesInput }));
                  }}
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input1 js-add-product-sub-img__input1"
                  style={{ display: 'none' }}

                  onChange={(e) => {
                    setImagesInput(prev => ([...prev, e.target]));
                    setFormData(prev => ({ ...prev, images: imagesInput }));
                  }}
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input2 js-add-product-sub-img__input2"
                  style={{ display: 'none' }}
                // ref={(img) => {
                //   imagesInput.current[2] = img;
                //   imgs.push(img);
                // }}
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input3 js-add-product-sub-img__input3"
                  style={{ display: 'none' }}
                // ref={(img) => {
                //   imagesInput.current[3] = img;
                //   imgs.push(img);
                // }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
