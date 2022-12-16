import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/navbar" element={<ProfileNavbar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/change-password" element={<ChangePassWord />} />
      <Route path="/userscore" element={<UserScore />} />
      <Route path="/my-products" element={<MyProduct />} />
      <Route path="/view-my-product" element={<ViewMyProduct />} />
      <Route path="/my-product-item" element={<MyProductItem />} />
    </Routes>
  );
}

export default App;
