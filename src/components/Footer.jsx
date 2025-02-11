import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Make sure you create this file

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
        </ul>
      </div>
      <div className="social-media">
        <a href="#">Facebook</a> | <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
