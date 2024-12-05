import React from 'react';
import './FAQSection.css';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>How does Intelli-Shop use image recognition technology?</h3>
        <p>
          Intelli-Shop leverages advanced image recognition technology to identify multiple objects within uploaded images.
          When you upload an image containing various products, Intelli-Shop accurately labels and highlights each object, 
          allowing you to interactively explore and find similar products available online.
        </p>
      </div>

      <div className="faq-item">
        <h3>How does Intelli-Shop match products with my search?</h3>
        <p>
          Our platform employs web scraping and intelligent search algorithms to find the most relevant products based 
          on your search criteria. By using machine learning, Intelli-Shop ranks and recommends products that best match 
          your preferences, helping you discover exactly what you're looking for.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can I search for products using text descriptions?</h3>
        <p>
          Yes, Intelli-Shop offers a comprehensive description portal where you can search for products using text-based 
          descriptions or keywords. The platform uses Natural Language Processing (NLP) to understand your input and 
          provide a list of products that closely match your search criteria.
        </p>
      </div>

      <div className="faq-item">
        <h3>What technologies power Intelli-Shop?</h3>
        <p>
          Intelli-Shop is powered by cutting-edge technologies like React for the frontend and Node.js for backend operations. 
          We also utilize image recognition APIs, machine learning algorithms, and Natural Language Processing (NLP) libraries 
          to enhance our intelligent searching and product matching capabilities.
        </p>
      </div>

      <div className="faq-item">
        <h3>How does Intelli-Shop ensure I get the best product recommendations?</h3>
        <p>
          We use machine learning algorithms and web scraping techniques to analyze product features, prices, and other 
          relevant factors from various online retailers. This allows us to rank and recommend the most relevant and 
          similar products, ensuring you always get the best options tailored to your preferences.
        </p>
      </div>
      
      <div className="faq-item">
        <h3>Is Intelli-Shop available for all types of products?</h3>
        <p>
          Currently, Intelli-Shop focuses on a wide range of products from different categories, and we're constantly 
          expanding our database. Our intelligent search and image recognition capabilities allow you to find products 
          across multiple categories quickly and efficiently.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
