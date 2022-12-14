import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.min.js';

import './Css/Base.css';
import './Css/Grid.css';
import './Css/Main.css';
import SpecialBtn from './Jsx/Special_btn';
import Header from './Jsx/Header';
import Home from './Jsx/Home';
import Search from './Jsx/Search';
import ProductDetail from './Jsx/Product_detail';
import SignUp from './Jsx/Sign_up';
import ProfileNavbar from './Jsx/Profile_navbar';
import Footer from './Jsx/Footer';
import ProductItem from './Jsx/Product_item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileNavbar />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
