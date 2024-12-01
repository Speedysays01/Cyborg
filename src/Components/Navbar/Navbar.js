// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </h1>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li onClick={handleLinkClick}>
          <NavLink exact to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li onClick={handleLinkClick}>
          <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li onClick={handleLinkClick}>
          <NavLink to="/events" className="nav-link" onClick={handleLinkClick}>
            Events
          </NavLink>
        </li>
        <li onClick={handleLinkClick}>
          <NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


