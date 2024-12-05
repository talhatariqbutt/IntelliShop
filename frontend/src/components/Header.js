import React from 'react';
import './Header.css';
import Button from './Button';
import fashionImage from '../assets/fashion.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Discover and Find Your Own Fashion!</h1>
        <p>Explore, Scan, and Generate Images you can't seem to grab hold of!</p>
        <Button label="Explore" />
      </div>
      <div className="header-image">
        <img src={fashionImage} alt="Fashion" />
      </div>
    </header>
  );
};

export default Header;
