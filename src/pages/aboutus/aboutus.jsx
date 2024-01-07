import React, { useState } from 'react';
import './about.css';
import CompanyImage from '../../assets/company-image.jpg';
import Image22 from './22.jpg';
import Image33 from './33.jpg';
import Image44 from './44.jpg';
import Image55 from './55.jpg';
import Image66 from './66.jpg';
import Image77 from './77.jpg';
import Image88 from './88.jpg';
import Image99 from './99.jpg';
import Image100 from './100.jpg';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showImages, setShowImages] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
    setShowImages(!showImages); 
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Our Company</h2>
        {isOpen && (
          <>
            <p>
              Welcome to our skincare journey! At Skincare Shop, we are passionate about delivering top-quality skincare products that nourish and revitalize your skin. Our mission is to provide innovative, safe, and effective solutions for all skin types.
            </p>
            <p>
              With years of research and dedication, we have curated a range of products using natural ingredients and advanced formulations, ensuring the best care for your skin. Our commitment to sustainability drives us to use eco-friendly packaging and minimize our environmental impact.
            </p>
            <p>
              Join us in embracing healthy, radiant skin. Explore our collection and discover the perfect regimen tailored for your skincare needs.
            </p>
          </>
        )}
        <button onClick={toggleButton} className='custom-button'>
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      <div className="image-container">
        {showImages && (
          <>
          <div className='image'>
            <img src={Image22} alt="Image 22" className="styled-image" />
            <img src={Image33} alt="Image 33" className="styled-image" />
            <img src={Image44} alt="Image 44" className="styled-image" />
            <img src={Image55} alt="Image 55" className="styled-image" />
            <img src={Image66} alt="Image 66" className="styled-image" />
            <img src={Image77} alt="Image 77" className="styled-image" />
            <img src={Image88} alt="Image 88" className="styled-image" />
            <img src={Image99} alt="Image 99" className="styled-image" />
            <img src={Image100} alt="Image 100" className="styled-image" />
            </div>
          </>
        )}
        <img src={CompanyImage} alt="Company" className="company-image" />
      </div>
    </div>
  );
};

export default AboutUs;
