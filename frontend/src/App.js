import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Home from './pages/Home'; 
import Upload from './pages/Upload'; 
import Generate from './pages/Generate';
import Wishlist from './pages/Wishlist';
import { WishlistProvider } from './components/WishlistContext'; // Import the provider
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login state

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <WishlistProvider>  {/* Wrap the Routes with WishlistProvider */}
          <Routes>
            <Route path="/" element={<Index onLogin={handleLogin} />} />
            <Route path="/home" element={<Home onLogout={handleLogout} isLoggedIn={isLoggedIn} />} /> 
            <Route path="/upload" element={<Upload />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </WishlistProvider>
      </Router>
    </div>
  );
};

export default App;
