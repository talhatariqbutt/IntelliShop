import React from 'react';
import GeneratePage from '../components/Generate';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Generate = () => {
  return (
    <div className="generate-page">
    {/* <Navbar /> */}
      <GeneratePage />
      <Footer/>
    </div>
  );
};

export default Generate;
