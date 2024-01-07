// AboutUs.jsx

import React, { useState } from 'react';
import './about.css';
import CompanyImage from '../../assets/company-image.jpg';

const AboutUs = () => {
const[isOpen,setIsOpen]=useState(true)
const[image,setImage]=useState(false)
const showImg=()=>{
  setImage(!image)
}
const toggleButton=()=>{
  setIsOpen(!isOpen)
}

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Our Company</h2>
     
          {isOpen&&(
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
            <button onClick={toggleButton} className='custom-button'>{isOpen?"Hide":"Show"}</button>
      </div>
  
      <div className="image-container">
        <img src={CompanyImage} alt="Company" className="company-image" />
      </div>
    </div>
  );
};

export default AboutUs;
