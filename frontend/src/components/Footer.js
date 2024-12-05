import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Logo and Social Media */}
        <div className="footer-section">
          <h1 className="footer-logo">IntelliShop</h1>
          <p className="footer-heading">Social Media</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Middle Left Section: Shop Links */}
        <div className="footer-section">
          <h3 className="footer-heading">SHOP</h3>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
        </div>

        {/* Middle Right Section: Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Right Section: Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3 className="footer-heading">STAY UP TO DATE</h3>
          <div className="newsletter-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom">
        <p><a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Cookies</a></p>
      </div>
    </footer>
  );
};

export default Footer;
