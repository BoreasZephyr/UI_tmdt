import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './Jsx/Home';
import Search from './Jsx/Search';
import ProductDetail from './Jsx/Product_detail';
import SignUp from './Jsx/Sign_up';
import ProfileNavbar from './Jsx/Profile_navbar';
import Profile from './Jsx/Profile';
import ChangePassWord from './Jsx/Profile_change_password';
import UserScore from './Jsx/Score';
import MyProduct from './Jsx/My_product';
import MyProductItem from './Jsx/My_product_item';
import ViewMyProduct from './Jsx/View-my-product';
import WonProduct from './Jsx/Won_product';
import AddProduct from './Jsx/Add_product';
import Cart from './Jsx/Cart';
import SignIn from './Jsx/Sign_in';
import Header from './Jsx/Header';
import CheckOut from './Jsx/Check_out';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  const layoutOverlay = useRef(null); // --> ref to "js-layout__overlay" div

  function showLoginForm() {
    layoutOverlay.current.classList.add('show');
  }

  function hideLoginForm() {
    layoutOverlay.current.classList.remove('show');
  }

  return (
    <>
      <Header showLoginForm={showLoginForm} user={user} />
      <SignIn ref={layoutOverlay} hideLoginForm={hideLoginForm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Search />} />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate replace to="/" />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail user={user} showLoginForm={showLoginForm} />}
        />
        <Route
          path="/signup"
          element={
            !user ? (
              <SignUp showLoginForm={showLoginForm} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/navbar"
          element={user ? <ProfileNavbar /> : <Navigate replace to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to="/" />}
        />
        <Route
          path="/change-password"
          element={user ? <ChangePassWord /> : <Navigate replace to="/" />}
        />
        <Route
          path="/won-products"
          element={user ? <WonProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/user-score"
          element={user ? <UserScore /> : <Navigate replace to="/" />}
        />
        <Route
          path="/my-products"
          element={user ? <MyProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/add-product"
          element={
            user ? (
              <AddProduct showCheckoutForm={showLoginForm} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/view-my-products"
          element={user ? <ViewMyProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/my-products-item"
          element={user ? <MyProductItem /> : <Navigate replace to="/" />}
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/check-out"
          element={user ? <CheckOut /> : <Navigate replace to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
