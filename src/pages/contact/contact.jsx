// Footer.jsx

import React, { useState } from 'react';

const footerStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyles = {
  margin: '5px',
  padding: '8px',
  width: '300px',
};

const buttonStyles = {
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#fff',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating a delay to mimic form submission
    setTimeout(() => {
      // Your form submission logic here
      console.log(formData);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <footer style={footerStyles}>
      <form style={formStyles} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          style={inputStyles}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          style={inputStyles}
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          rows="4"
          style={inputStyles}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          style={{
            ...buttonStyles,
            backgroundColor: loading ? '#ccc' : '#fff',
            color: loading ? '#333' : '#333',
            pointerEvents: loading ? 'none' : 'auto',
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
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
