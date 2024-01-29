// Navbar.jsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../images/logo-Image.png';
// import LoginSignup from '../pages/LoginSignup/LoginSignup'; // Import the LoginSignup component

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <span className="brand">Class Routine Management</span>
        </div>
        <ul className="nav-links">
          <li className="nav-item">Course Coordinators</li>
          <li className="nav-item">Teachers</li>
          <li className="nav-item">About Us</li>
          {/* Add more navigation links as needed */}
        </ul>
        <div className="user-section">
          <button  className="user-button">SignUp</button>
          <button  className="user-button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
