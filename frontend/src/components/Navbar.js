import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginForm from './LoginForm';

const Navbar = ({ isLoggedIn, userName, onLogout, onLoginSuccess }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Navbar received isLoggedIn:', isLoggedIn); // Debugging log
    console.log('Navbar received userName prop:', userName); // Debugging
  }, [isLoggedIn, userName]); // Log whenever these props change

  const openLoginForm = () => {
    console.log('Opening login form'); // Debugging log
    setIsLoginOpen(true);
  };

  const closeLoginForm = () => {
    console.log('Closing login form'); // Debugging log
    setIsLoginOpen(false);
  };

  const handleSignOut = () => {
    const confirmation = window.confirm("Are you sure you want to sign out?");
    if (confirmation) {
      onLogout(); // Reset the user state
      navigate('/'); // Redirect to the homepage
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          IntelliShop
        </div>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/generate">Generate</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/wishlist" className="wishlist-button">
            <i className="fas fa-shopping-bag"></i>
          </Link>
          {isLoggedIn ? (
            <div className="user-info">
              <span className="user-name">{userName || 'Guest'}</span>
              <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <button className="login-button" onClick={openLoginForm}>Login</button>
          )}
        </div>
      </nav>

      {isLoginOpen && (
        <LoginForm
          onClose={closeLoginForm}
          onLoginSuccess={(fullName, accessToken) => {
            console.log('LoginForm login successful with fullName:', fullName); // Debugging log
            closeLoginForm();
            navigate('/home');
            // Send login data back to App.js to update state and handle token storage
            onLoginSuccess(fullName, accessToken);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
