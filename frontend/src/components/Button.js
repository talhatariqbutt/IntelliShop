import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ label }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate('/home'); // Navigate to the home page on click
  };

  return (
    <button className="primary-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
