import React from 'react';
import Header from "./components/Header"
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Contact from './components/Contact'
import About from './components/About';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="*" element={<div>404</div>} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
