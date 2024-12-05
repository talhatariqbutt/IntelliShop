import React, { useState } from 'react';
import './WishlistPage.css';

const WishlistPage = () => {
  // Sample product data (These would ideally come from the user's cart)
  const initialProducts = [
    {
      id: 1,
      name: 'TShirts',
      image: 'https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: '$29.99',
      rating: 4,
    },
    {
      id: 2,
      name: 'Premium Jackets',
      image: 'https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHMlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$19.99',
      rating: 3,
    },
    {
      id: 3,
      name: 'Jeans',
      image: 'https://plus.unsplash.com/premium_photo-1675877946243-bc3f83e65afe?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D',
      price: '$39.99',
      rating: 5,
    },
    {
      id: 4,
      name: 'Shoes and Sneakers',
      image: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXMlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$24.99',
      rating: 4,
    },
  ];

  const [wishlist, setWishlist] = useState(initialProducts);

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-message">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-products">
          {wishlist.map((product) => (
            <div className="wishlist-item" key={product.id}>
              <img src={product.image} alt={product.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h3 className="wishlist-name">{product.name}</h3>
                <p className="wishlist-price">{product.price}</p>
                <div className="wishlist-rating">{renderStars(product.rating)}</div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
