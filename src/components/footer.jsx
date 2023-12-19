import React from 'react';

const footerStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div>
        <p>Location: Suharekë, Kosova</p>
        <p>Phone: 059 888 444</p>
        <p>Email: info@skincarethr.com</p>
      </div>
      <div>
        <p>Additional Information or Links Here</p>
      </div>
    </footer>
  );
};

export default Footer;