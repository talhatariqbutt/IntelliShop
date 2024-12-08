import React from 'react';
import { useWishlist } from './WishlistContext';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image_url} alt={item.product_name} className="wishlist-image" />
              <h4>{item.product_name}</h4>
              <p>{item.brand}</p>
              <p>{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item)}
                className="remove-from-wishlist"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
