import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  const response = await fetch(`http://localhost:5000/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });


      const data = await response.json();
      if (data.token) {
        console.log('Login successful');
        // Navigate to the Book Recommendation page
        navigate('/book-recommendation');
        onClose(); // Close the login modal
      } else {
        setError('Login failed. Please check your credentials.'); // Set error message
      }
    } catch (err) {
      setError('Error logging in: ' + err.message); // Set error message
      console.error(err);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>} 
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        console.log('Login successful');
        // Check for admin credentials
        if (email === 'admin123@gmail.edu' && password === '123@adMIN') {
          // Navigate to the CRUD page
          navigate('/crud-page');
        } else {
          // Navigate to the Book Recommendation page
          navigate('/book-recommendation');
        }
        onClose(); // Close the login modal
      } else {
        setError('Login failed. Please check your credentials.'); // Set error message
      }
    } catch (err) {
      setError('Error logging in: ' + err.message); // Set error message
      console.error(err);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>} 
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Login;*/
