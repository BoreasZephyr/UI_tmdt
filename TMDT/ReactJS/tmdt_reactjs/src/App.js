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
      <Route path="/Products/:id" element={<ProductDetail />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Navbar" element={<ProfileNavbar />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ChangePassWord" element={<ChangePassWord />} />
      <Route path="/UserScore" element={<UserScore />} />
      <Route path="/MyProducts" element={<MyProduct />} />
      <Route path="/ViewMyProduct" element={<ViewMyProduct />} />
      <Route path="/MyProductItem" element={<MyProductItem />} />
    </Routes>
  );
}

export default App;
