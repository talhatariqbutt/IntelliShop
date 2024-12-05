import React from 'react';
import { Link } from 'react-router-dom';
import './ActionSection.css';

const ActionSection = () => {
  return (
    <section className="action-section">
      <h2>Ready to Experience the Future of Shopping?</h2>
      <p>
        Discover the power of Intelli-Shop's advanced technologies! Start by generating personalized
        product recommendations or uploading an image to find exactly what you’re looking for. The choice is yours!
      </p>
      <div className="action-buttons">
        <Link to="/generate" className="action-button generate">✨ Generate</Link>
        <Link to="/upload" className="action-button upload">📤 Upload</Link>
      </div>
    </section>
  );
};

export default ActionSection;
