import React from 'react';
import WishlistPage from '../components/WishlistPage';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  return (
    <div className="wishlist-container">
    {/* <Navbar/> */}
      <WishlistPage />
      <Footer/>
    </div>
  );
};

export default Wishlist;
