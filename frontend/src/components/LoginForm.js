// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginForm.css';

// const LoginForm = ({ onClose, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(true);

//   // Handle email input
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   // Handle password input
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Handle form submission for registration
//   // Handle form submission for registration
//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/user/register', {
//         email: email,
//         password: password,
//       });

//       if (response && response.data) {
//         alert('User registered successfully!');
//         // Clear email and password fields
//         setEmail('');
//         setPassword('');
//         // Show the login form
//         setIsRegistering(false);
//         console.log(response.data);
//       } else {
//         alert('Registration failed: No response from server');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Error registering user: ' + (error.response?.data?.detail || 'Unknown error'));
//     }
//   };


//   // Handle form submission for login
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/user/login', {
//         email: email,
//         password: password,
//       });

//       if (response && response.data) {
//         alert('Login successful!');
//         onLoginSuccess(); // Notify the navbar about successful login
//         console.log(response.data);
//       } else {
//         alert('Login failed: No response from server');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Error logging in: ' + (error.response?.data?.detail || 'Unknown error'));
//     }
//   };

//   return (
//     <div className="login-form-overlay">
//       <div className="login-form-container">
//         <div className="login-logo">IntelliShop</div>
//         <h2>{isRegistering ? 'Create an account' : 'Login to your account'}</h2>
//         <p>Enter your credentials to {isRegistering ? 'sign up' : 'login'} for this app</p>

//         <input
//           type="email"
//           className="email-input"
//           placeholder="email@domain.com"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <input
//           type="password"
//           className="password-input"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />

//         {isRegistering ? (
//           <button className="email-button" onClick={handleRegister}>
//             Sign up with email
//           </button>
//         ) : (
//           <button className="email-button" onClick={handleLogin}>
//             Login with email
//           </button>
//         )}

//         <div className="divider">
//           <span>or continue with</span>
//         </div>

//         <button className="google-button">
//           <i className="fab fa-google"></i> Continue with Google
//         </button>

//         <p className="terms-text">
//           By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//         </p>

//         <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
//           {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
//         </p>

//         <button className="close-button" onClick={onClose}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginForm.css';

// const LoginForm = ({ onClose, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(true);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/user/register', {
//         email: email,
//         password: password,
//       });

//       if (response && response.data) {
//         alert('User registered successfully!');
//         setEmail('');
//         setPassword('');
//         setIsRegistering(false);
//         console.log(response.data);
//       } else {
//         alert('Registration failed: No response from server');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Error registering user: ' + (error.response?.data?.detail || 'Unknown error'));
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/user/login', {
//         email: email,
//         password: password,
//       });

//       if (response && response.data) {
//         alert('Login successful!');
//         onLoginSuccess(); // Notify the navbar about successful login
//         setEmail(''); // Clear email field
//         setPassword(''); // Clear password field
//         console.log(response.data);
//       } else {
//         alert('Login failed: No response from server');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Error logging in: ' + (error.response?.data?.detail || 'Unknown error'));
//     }
//   };

//   return (
//     <div className="login-form-overlay">
//       <div className="login-form-container">
//         <div className="login-logo">IntelliShop</div>
//         <h2>{isRegistering ? 'Create an account' : 'Login to your account'}</h2>
//         <p>Enter your credentials to {isRegistering ? 'sign up' : 'login'} for this app</p>

//         <input
//           type="email"
//           className="email-input"
//           placeholder="email@domain.com"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <input
//           type="password"
//           className="password-input"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />

//         {isRegistering ? (
//           <button className="email-button" onClick={handleRegister}>
//             Sign up with email
//           </button>
//         ) : (
//           <button className="email-button" onClick={handleLogin}>
//             Login with email
//           </button>
//         )}

//         <div className="divider">
//           <span>or continue with</span>
//         </div>

//         <button className="google-button">
//           <i className="fab fa-google"></i> Continue with Google
//         </button>

//         <p className="terms-text">
//           By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//         </p>

//         <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
//           {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
//         </p>

//         <button className="close-button" onClick={onClose}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = async () => {
    setError('');
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!firstName.trim() || !lastName.trim()) {
      setError('First and last names are required.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/user/register', {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      alert('User registered successfully!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setIsRegistering(false);
    } catch (error) {
      setError(error.response?.data?.detail || 'Registration failed.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });
      alert('Login successful!');
      onLoginSuccess();
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.response?.data?.detail || 'Login failed.');
    }
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <div className="login-logo">IntelliShop</div>
        <h2>{isRegistering ? 'Create an account' : 'Login to your account'}</h2>
        {error && <p className="error-text">{error}</p>}

        {isRegistering && (
          <>
            <input
              type="text"
              className="first-name-input"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              type="text"
              className="last-name-input"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </>
        )}

        <input
          type="email"
          className="email-input"
          placeholder="email@domain.com"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="password-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        {isRegistering && (
          <input
            type="password"
            className="confirm-password-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        )}

        {isRegistering ? (
          <button className="email-button" onClick={handleRegister}>
            Sign up with email
          </button>
        ) : (
          <button className="email-button" onClick={handleLogin}>
            Login with email
          </button>
        )}

        <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
        </p>

        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
