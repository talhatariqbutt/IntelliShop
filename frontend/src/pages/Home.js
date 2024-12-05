import React from 'react';
import BrandSection from '../components/BrandSection';
import TopSellingProducts from '../components/TopSellingProducts';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ActionSection from '../components/ActionSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandSection />
      <TopSellingProducts />
      <AboutSection />
      <FAQSection />
      <ActionSection/>
      <Footer />
    </div>
  );
};

export default Home;
