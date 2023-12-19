// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
 
        <Link to="/about" className="custom-link">About Us</Link>
        <Link to="/" className="custom-link">Services</Link>
        <Link to="/contact" className="custom-link">Contact</Link>

    
        <Link to="/cart" className="custom-link">
          <div className="custom-shopping-cart-container">
            <ShoppingCart size={32} className="shopping-cart-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};
