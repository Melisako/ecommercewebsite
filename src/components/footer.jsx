import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

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
      <div className="additional-links mt-3">
        
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="social-icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="social-icon" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;