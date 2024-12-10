// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import LoginForm from './LoginForm';

// const Navbar = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const navigate = useNavigate(); // Hook for navigation

//   const openLoginForm = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginForm = () => {
//     setIsLoginOpen(false);
//   };
  
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     closeLoginForm();
//     navigate('/home'); // Redirect to the default route

//   };

//   const handleSignOut = () => {
//     setIsLoggedIn(false); // Update login state
//     navigate('/'); // Redirect to the default route
//   };

//   const handleLogoClick = () => {
//     navigate('/'); // Redirect to default route when logo is clicked
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo" onClick={handleLogoClick}>
//           IntelliShop
//         </div>
//         <ul className="navbar-links">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/upload">Upload</Link></li>
//           <li><Link to="/generate">Generate</Link></li>
//           <li><Link to="/wishlist">Wishlist</Link></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="navbar-actions">
//           <Link to="/wishlist" className="wishlist-button">
//             <i className="fas fa-shopping-bag"></i>
//           </Link>
//           {isLoggedIn ? (
//             <button className="signout-button" onClick={handleSignOut}>
//               Sign Out
//             </button>
//           ) : (
//             <button className="login-button" onClick={openLoginForm}>
//               Login
//             </button>
//           )}
//         </div>
//       </nav>
      
//       {isLoginOpen && <LoginForm onClose={closeLoginForm} onLoginSuccess={handleLoginSuccess} />}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import LoginForm from './LoginForm';

// const Navbar = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
//   const navigate = useNavigate(); // For navigation

//   const openLoginForm = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginForm = () => {
//     setIsLoginOpen(false);
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     closeLoginForm();
//     navigate('/home'); // Navigate to home on successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/'); // Redirect to default route on logout
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo" onClick={() => navigate('/')}>IntelliShop</div>
//         <ul className="navbar-links">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/upload">Upload</Link></li>
//           <li><Link to="/generate">Generate</Link></li>
//           <li><Link to="/wishlist">Wishlist</Link></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="navbar-actions">
//           <Link to="/wishlist" className="wishlist-button">
//             <i className="fas fa-shopping-bag"></i>
//           </Link>
//           {isLoggedIn ? (
//             <button className="login-button" onClick={handleLogout}>Sign Out</button>
//           ) : (
//             <button className="login-button" onClick={openLoginForm}>Login</button>
//           )}
//         </div>
//       </nav>

//       {isLoginOpen && <LoginForm onClose={closeLoginForm} onLoginSuccess={handleLoginSuccess} />}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import LoginForm from './LoginForm';

// const Navbar = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const [userName, setUserName] = useState(''); // Store user's full name
//   const navigate = useNavigate(); // Hook for navigation

//   const openLoginForm = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginForm = () => {
//     setIsLoginOpen(false);
//   };

//   const handleLoginSuccess = (fullName) => {
//     setIsLoggedIn(true);
//     setUserName(fullName); // Set the logged-in user's name
//     closeLoginForm();
//     navigate('/home'); // Redirect to home on successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserName(''); // Clear the user's name
//     navigate('/'); // Redirect to default route on logout
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo" onClick={() => navigate('/')}>IntelliShop</div>
//         <ul className="navbar-links">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/upload">Upload</Link></li>
//           <li><Link to="/generate">Generate</Link></li>
//           <li><Link to="/wishlist">Wishlist</Link></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="navbar-actions">
//           <Link to="/wishlist" className="wishlist-button">
//             <i className="fas fa-shopping-bag"></i>
//           </Link>
//           {isLoggedIn ? (
//             <div className="user-info">
//               <span className="user-name">{userName}</span>
//               <button className="signout-button" onClick={handleLogout}>Sign Out</button>
//             </div>
//           ) : (
//             <button className="login-button" onClick={openLoginForm}>Login</button>
//           )}
//         </div>
//       </nav>

//       {isLoginOpen && (
//         <LoginForm
//           onClose={closeLoginForm}
//           onLoginSuccess={(fullName) => handleLoginSuccess(fullName)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [userName, setUserName] = useState(''); // Store user's full name
  const navigate = useNavigate(); // Hook for navigation

  const openLoginForm = () => {
    setIsLoginOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = (fullName) => {
    console.log("Login successful, user:", fullName); // Debugging statement
    setIsLoggedIn(true);
    setUserName(fullName); // Set the logged-in user's name
    closeLoginForm();
    navigate('/home'); // Redirect to home on successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(''); // Clear the user's name
    navigate('/'); // Redirect to default route on logout
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/')}>IntelliShop</div>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/generate">Generate</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/wishlist" className="wishlist-button">
            <i className="fas fa-shopping-bag"></i>
          </Link>
          {isLoggedIn ? (
            <div className="user-info">
              <span className="user-name">{userName}</span>
              <button className="signout-button" onClick={handleLogout}>Sign Out</button>
            </div>
          ) : (
            <button className="login-button" onClick={openLoginForm}>Login</button>
          )}
        </div>
      </nav>

      {isLoginOpen && (
        <LoginForm
          onClose={closeLoginForm}
          onLoginSuccess={(fullName) => handleLoginSuccess(fullName)}
        />
      )}
    </>
  );
};

export default Navbar;
