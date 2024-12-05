import React from 'react';
import './TopSellingProducts.css';

const TopSellingProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'TShirts',
      image: 'https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: '$29.99',
      rating: 4,
      link: 'https://example.com/tshirts'
    },
    {
      id: 2,
      name: 'Premium Jackets',
      image: 'https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHMlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$19.99',
      rating: 3,
      link: 'https://example.com/jackets'
    },
    {
      id: 3,
      name: 'Jeans',
      image: 'https://plus.unsplash.com/premium_photo-1675877946243-bc3f83e65afe?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D',
      price: '$39.99',
      rating: 5,
      link: 'https://example.com/jeans'
    },
    {
      id: 4,
      name: 'Shoes and Sneakers',
      image: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXMlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$24.99',
      rating: 4,
      link: 'https://example.com/shoes'
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <section className="top-selling-section">
      <h2>Top Selling Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-rating">{renderStars(product.rating)}</div>
            
            <div className="product-buttons">
              <button className="button add-to-cart">Add to Cart</button>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button link-to-website"
              >
                Link to Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;
