import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>🩺 Medinear</h2>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#doctors" className="active">Find Doctors</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;