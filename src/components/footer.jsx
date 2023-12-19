import React from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  margin: '0 10px',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'inline' }}>
            <Link to="/about" style={linkStyles}>About Us</Link>
          </li>
          <li style={{ display: 'inline' }}>
            <Link to="/services" style={linkStyles}>Services</Link>
          </li>
          <li style={{ display: 'inline' }}>
            <Link to="/contact" style={linkStyles}>Contact</Link> 
          </li>
        </ul>
      </nav>
      <div>
        <p>Location: Suharekë, Kosova</p>
        <p>Phone: 059 888 444</p>
        <p>Email: info@skincarethr.com</p>
      </div>
    </footer>
  );
};

export default Footer;
