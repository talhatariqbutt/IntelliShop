import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRetypePasswordChange = (e) => setRetypePassword(e.target.value);

  const handleRegister = async () => {
    if (password !== retypePassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/user/register', {
        full_name: fullName,
        email: email,
        password: password,
      });

      if (response?.data) {
        alert('User registered successfully!');
        setFullName('');
        setEmail('');
        setPassword('');
        setRetypePassword('');
        setIsRegistering(false);
      }
    } catch (error) {
      alert(`Error registering user: ${error.response?.data?.detail || 'Unknown error'}`);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email: email,
        password: password,
      });
  
      if (response?.data) {
        const { full_name, access_token } = response.data;  // Change token to access_token
  
        // Store the JWT access token and full name in localStorage
        localStorage.setItem('access_token', access_token);  // Update to access_token
        localStorage.setItem('fullName', full_name);
  
        alert(`Login successful! Welcome, ${full_name}`);
        onLoginSuccess(full_name); // Pass the full name to Navbar
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      alert(`Error logging in: ${error.response?.data?.detail || 'Unknown error'}`);
    }
  };
  
  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <div className="login-logo bungee-tint-regular">IntelliShop</div>
        <h2>{isRegistering ? 'Welcome!' : 'Hello Again!'}</h2>
        <p>{isRegistering ? 'Create an account to get started' : 'Log in to continue shopping'}</p>

        {isRegistering && (
          <input
            type="text"
            className="input-field"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        )}
        <input
          type="email"
          className="input-field"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isRegistering && (
          <input
            type={showPassword ? 'text' : 'password'}
            className="input-field"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={handleRetypePasswordChange}
          />
        )}
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <button
          className="action-button"
          onClick={isRegistering ? handleRegister : handleLogin}
        >
          {isRegistering ? 'Sign Up' : 'Log In'}
        </button>

        <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </p>

        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
