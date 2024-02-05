import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/ShopHome';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
// interface ShopCategoryProps {
//   banner: string;
//   category: string;
// }

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"  />}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"  />}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    
  );
}

export default App;
