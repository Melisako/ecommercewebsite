import React, { useState } from 'react';

const Contact = () => {
  const [randomInfo, setRandomInfo] = useState('');

  const generateRandomInfo = () => {
    const infos = [
      "Phone: +1234567890",
      "Email: example@email.com",
      "Address: 123 Street, City, Country",
      // Add more random information here...
    ];

    const randomIndex = Math.floor(Math.random() * infos.length);
    setRandomInfo(infos[randomIndex]);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        {/* Your contact form fields go here */}
        {/* For example: */}
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="4" />
        <button type="submit">Submit</button>
      </form>
      <div className="random-info-box">
        <button onClick={generateRandomInfo}>Get Random Info</button>
        {randomInfo && <p>{randomInfo}</p>}
      </div>
    </div>
  );
};

export default Contact;
