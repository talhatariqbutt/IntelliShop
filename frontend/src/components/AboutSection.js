import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>About Intelli-Shop</h2>
      <p>
        Intelli-Shop is an innovative and user-friendly web application designed
        to revolutionize the online shopping experience. Leveraging cutting-edge technologies
        like React and Node.js, Intelli-Shop offers a seamless, all-in-one platform for discovering,
        comparing, and purchasing products from various online retailers.
      </p>

      <h3>Our Objectives</h3>
      <ul>
        <li>
          <strong>Visual Product Identification:</strong> Upload an image containing multiple
          objects, and our advanced image recognition technology will identify and label the objects,
          making them interactively clickable.
        </li>
        <li>
          <strong>Intelligent Product Matching:</strong> Our system employs web scraping and
          advanced search algorithms to find the best matching or similar products available in
          the market, helping you save time.
        </li>
        <li>
          <strong>Comprehensive Description Portal:</strong> Search for products using text-based
          descriptions and keywords. Intelli-Shop uses Natural Language Processing (NLP) to find
          relevant products based on your input.
        </li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Visual Product Identification:</strong> Upload images containing multiple objects, 
          and our AI will process the image, identifying and displaying clickable hotspots for each object.
        </li>
        <li>
          <strong>Intelligent Product Matching:</strong> Click on any identified object to search for similar products, 
          with machine learning helping to rank and recommend the most relevant items based on features and price.
        </li>
        <li>
          <strong>Comprehensive Description Portal:</strong> Enter a textual description to find products, 
          using NLP to match your input with items available online.
        </li>
      </ul>

      <h3>Technology Stack</h3>
      <p>
        Intelli-Shop is built with a modern technology stack, including React for a dynamic and interactive frontend, 
        Node.js for backend functionality, and databases like MongoDB or MySQL for efficient data management. 
        We also utilize APIs and machine learning libraries such as TensorFlow, Puppeteer, and SpaCy for enhanced functionality.
      </p>

      <h3>Our Mission</h3>
      <p>
        Intelli-Shop aims to streamline your online shopping experience by combining image recognition, 
        web scraping, and intelligent searching, empowering you to effortlessly discover, compare, 
        and purchase products, saving you both time and effort.
      </p>

      <p>
        Join us on this journey to revolutionize the way you shop online. With Intelli-Shop, 
        shopping has never been easier, more intuitive, or more efficient.
      </p>
    </section>
  );
};

export default AboutSection;
