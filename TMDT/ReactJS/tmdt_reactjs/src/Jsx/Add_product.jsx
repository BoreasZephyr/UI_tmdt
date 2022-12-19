import React from 'react';

import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';
import '../Css/Add_product.css';

import Header from './Header';
import SpecialBtn from './Special_btn';
import ProfileNavbar from './Profile_navbar';

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

// import { Carousel, CarouselItemProps } from 'react-bootstrap'
import { useEffect } from 'react';

function AddProduct() {
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

      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(reader.result)
        }
      };

      reader.readAsDataURL(e.target.files[0]);

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
  return (
    <>
      <ProfileNavbar />
      <div className="grid wide">
        <div className="row">
          <div className="column l-10 profile-main-content">
            <form action="" className="add-product__form">
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
                          //   style={{
                          //     backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/5ee1d0474b50b10ff3d8992cc12c30771037dbf85254794e732c79dc944c_640.jpg)`,
                          //   }}
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
                              //   defaultValue="Casio-MTP-VT01L-2B"
                            />
                            <input
                              type="number"
                              className="column l-2 add-product__input add-product-start-price__input"
                              placeholder="Start price"
                              datatype="currency"
                              //   defaultValue="500"
                            />
                            <input
                              type="number"
                              className="column l-2 add-product__input add-product-step-price__input"
                              placeholder="Step price"
                              datatype="currency"
                              //   defaultValue="250"
                            />
                            <input
                              type="date"
                              name=""
                              className="column l-3 add-product__input add-product-date__input"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <textarea
                            name=""
                            rows="3"
                            className="column l-12 add-product-description__input add-product-short-description__input"
                            placeholder="Short description"
                            // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                          ></textarea>
                          <textarea
                            name=""
                            rows="5"
                            className="column l-12 add-product-description__input add-product-details-description__input"
                            placeholder="Defaults description"
                            // defaultValue="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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
                            // style={{
                            //   backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/55e5d1424951ab14f1dc8460962e33791c3ad6e04e50744172297ed2914cc2_640.jpg)`,
                            // }}
                          ></div>
                        </div>
                      </div>
                      <div className="column l-4">
                        <div className="add-product__img-container add-product-sub__img-container">
                          <div
                            className="column add-product__img add-product-sub__img js-add-product-sub__img2"
                            // style={{
                            //   backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/54e9dd444e55aa14f1dc8460962e33791c3ad6e04e5074417d2d73d39f4ec1_640.jpg)`,
                            // }}
                          ></div>
                        </div>
                      </div>
                      <div className="column l-4">
                        <div className="add-product__img-container add-product-sub__img-container">
                          <div
                            className="column add-product__img add-product-sub__img js-add-product-sub__img3"
                            // style={{
                            //   backgroundImage: `url(https://randomwordgenerator.com/img/picture-generator/52e7d3464a52a414f1dc8460962e33791c3ad6e04e50744172297cd6944bc2_640.jpg)`,
                            // }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-product__btn-container">
                <Link to="/my-products">
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
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input1 js-add-product-sub-img__input1"
                  style={{ display: 'none' }}
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input2 js-add-product-sub-img__input2"
                  style={{ display: 'none' }}
                />
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  className="add-product-sub-img__input3 js-add-product-sub-img__input3"
                  style={{ display: 'none' }}
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
