import React from 'react';
import './BrandSection.css';

const BrandSection = () => {
  return (
    <section className="brand-section">
      <h2>Our Brands</h2>
      <div className="brand-list">
        <div className="brand-item">
          <img 
            src="data:image/png;base64,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" 
            alt="Brand 1"
            className="brand-image"
          />
          {/* <p>Brand 1</p> */}
        </div>
        <div className="brand-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIr51SqPXo0xcYTXHzICKleZQ-gMQz9xA-A&s" 
            alt="Brand 2"
            className="brand-image"
          />
          {/* <p>Brand 2</p> */}
        </div>
        <div className="brand-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0VPwX01Q7RWAdGhEeJ6ebOnbcSHsVD0Rew&s" 
            alt="Brand 3"
            className="brand-image"
          />
          {/* <p>Brand 3</p> */}
        </div>
        <div className="brand-item">
          <img 
            src="data:image/png;base64,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" 
            alt="Brand 4"
            className="brand-image"
          />
          {/* <p>Brand 4</p> */}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
