import React from "react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" required />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message</label>

          <input type="message" name="message" id="message"  placeholder="Enter Message" required></input>
        </div>
        <button type="submit">Submit</button>
      </form>

      <style>
        {`
          .contact-container {
            max-width: 800px;
            margin: 50px auto;
            margin-bottom: 2rem;
            background-color: #333;
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          }

          .contact-form {
            margin-bottom: 2rem;
          justify-content: center;
          align-items: center;
            display: flex;
            flex-direction: column;
          }

          .form-group {
            margin-bottom: 2rem;
          }

          label {
            font-weight: bold;
            display:flex;
            justify-content: center;
            margin-bottom: 1rem;
            font-size: 1.1rem;
          }

          input,
          textarea {

            margin-left: 2rem;
            padding: 10px;
            border: 1px solid #777;
            width: 12rem;
            background-color: #444;
            color: #fff;
          }

          input:focus,
          textarea:focus {
            outline: none;
            border-color: #fff;
          }

          button {
            margin-bottom: 2rem;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #222;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #111;
          }
        `}
      </style>
    </div>
  );
};

