import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import AboutUs from './pages/aboutus/aboutus';
import { Contact } from './pages/contact';
import Footer from './components/footer';
import { Shop } from './pages/shop/shop';

import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';





function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/about" element={<AboutUs />} />
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;