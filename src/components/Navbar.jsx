import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure you create this file

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>Proton Classes</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/register-teacher">Teacher Registration</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/FAQ">FAQs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
