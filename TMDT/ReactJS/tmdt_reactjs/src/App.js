import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './Jsx/Home';
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
        <Route
          path="/Cart"
          element={user ? <Cart /> : <Navigate replace to="/" />}
        />
        <Route path="/Products/:id" element={<ProductDetail user={user} showLoginForm={showLoginForm} />} />
        <Route
          path="/SignUp"  
          element={!user ? <SignUp showLoginForm={showLoginForm} /> : <Navigate replace to="/" />}
        />
        <Route
          path="/Navbar"
          element={user ? <ProfileNavbar /> : <Navigate replace to="/" />}
        />
        <Route
          path="/Profile"
          element={user ? <Profile /> : <Navigate replace to="/" />}
        />
        <Route
          path="/ChangePassWord"
          element={user ? <ChangePassWord /> : <Navigate replace to="/" />}
        />
        <Route
          path="/WonProducts"
          element={user ? <WonProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/UserScore"
          element={user ? <UserScore /> : <Navigate replace to="/" />}
        />
        <Route
          path="/MyProducts"
          element={user ? <MyProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/AddProduct"
          element={user ? <AddProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/ViewMyProduct"
          element={user ? <ViewMyProduct /> : <Navigate replace to="/" />}
        />
        <Route
          path="/MyProductItem"
          element={user ? <MyProductItem /> : <Navigate replace to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
