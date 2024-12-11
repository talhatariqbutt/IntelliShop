import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Generate from './pages/Generate';
import Wishlist from './pages/Wishlist';
import Navbar from './components/Navbar'; 
import { WishlistProvider } from './components/WishlistContext'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  // Initialize state based on localStorage values
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');

  // Debugging: Log state changes
  useEffect(() => {
    console.log('App state updated: isLoggedIn:', isLoggedIn, 'loggedInUser:', loggedInUser);
  }, [isLoggedIn, loggedInUser]);

  const handleLogin = (fullName, accessToken) => {
    console.log('handleLogin called with fullName:', fullName); 
    setIsLoggedIn(true);
    setLoggedInUser(fullName);
    
    // Store the login state and user data in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', fullName);
    localStorage.setItem('access_token', accessToken);  // Optional: Store access token if needed
  };

  const handleLogout = () => {
    console.log('handleLogout called'); 
    setIsLoggedIn(false);
    setLoggedInUser('');
    
    // Remove login data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('access_token');  // Optional: Clear access token as well
  };

  return (
    <div className="App">
      <Router>
        <WishlistProvider>
          <Navbar
            isLoggedIn={isLoggedIn}
            userName={loggedInUser}
            onLogout={handleLogout}
            onLoginSuccess={handleLogin} 
          />
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
