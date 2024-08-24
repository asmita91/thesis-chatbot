import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    batch: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="registration-page">
      <div className="info-box">
        <h2>About Our Chatbot</h2>
        <p>
          Welcome to our AI Chatbot registration page. Our chatbot is designed to assist you with a variety of tasks and provide you with the information you need. Please fill in the form to get started.
        </p>
      </div>
      <div className="registration-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
          
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>

      </div>
    </div>
  );
};

export default RegistrationPage;
