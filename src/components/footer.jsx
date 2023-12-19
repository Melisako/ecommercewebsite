import React from 'react';

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
            <a href="#" style={linkStyles}>About Us</a>
          </li>
          <li style={{ display: 'inline' }}>
            <a href="#" style={linkStyles}>Services</a>
          </li>
          <li style={{ display: 'inline' }}>
            <a href="#" style={linkStyles}>Contact</a>
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
