import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import BookRecommendation from './components/BookRecommendation'; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true); // Show the login page
    setShowSignup(false); // Ensure the signup page is not visible
  };

  const handleSignupClick = () => {
    setShowSignup(true); // Show the signup page
    setShowLogin(false); // Ensure the login page is not visible
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Close the login page
  };

  const handleCloseSignup = () => {
    setShowSignup(false); // Close the signup page
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              
              <nav className="navbar">
                <div className="navbar-container">
                  <div className="logo">
                    <h1>BOOKMATE</h1>
                  </div>
                  <div className="auth-buttons">
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                    <button className="signup-btn" onClick={handleSignupClick}>Signup</button>
                  </div>
                </div>
              </nav>

              
              <div className="main-content">
                <div className="main-image"></div>
                <div className="content-section">
                  <h1>Discover Your Next Must-Read with BookMate!</h1>
                  <p>
                  BookMate brings you personalized book recommendations based on your academic courses.<br/>
                  Whether you're searching for textbooks, references, or exploring new reads, <br/>
                  we’ve got you covered with curated suggestions tailored just for you.
                  </p>
                  <div className="blinking-text">Unlock knowledge and explore a world of books — your next essential read is just a search away!</div>
                </div>
              </div>

              
              <div className="values-container">
              <h2>Features</h2>
              <div className="value-card-wrapper">
                <div className="value-card">
                  <h3>Course-Specific Resources</h3>
                  <p>Find textbooks and references tailored to specific academic courses.</p>
                </div>
                <div className="value-card">
                  <h3>Comprehensive Academic Search</h3>
                  <p>Search for books by course name from both KEC and OCLG collections.</p>
                </div>
                <div className="value-card">
                  <h3>Quick Book Access</h3>
                  <p>View book details and access online previews or download PDFs with one click.</p>
                </div>
                <div className="value-card">
                  <h3>Smart Keyword Matching</h3>
                  <p>Matches multiple keywords to find relevant books quickly.</p>
                </div>
                <div className="value-card">
                  <h3>Multi-Source Recommendations</h3>
                  <p>If a book isn’t found in KEC, get suggestions from OCLG automatically.</p>
                </div>
                </div>
              </div>

              
              <div className="terms-section">
                <h3>Terms and Services</h3>
                <p>
                By using BookMate, you agree to our terms and conditions. 
                We ensure your data privacy and provide curated book recommendations, collected and verified by our team.
                </p>
              </div>

              {showLogin && <Login onClose={handleCloseLogin} />}
              {showSignup && <Signup onClose={handleCloseSignup} />}
            </div>
          }
        />

        <Route path="/book-recommendation" element={<BookRecommendation />} />
      </Routes>
    </Router>
  );
};

export default App;

/*import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import BookRecommendation from './components/BookRecommendation';
import BookCrudPage from './components/BookCrudPage'; // Correctly import the BookCrudPage component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              
              <nav className="navbar">
                <div className="navbar-container">
                  <div className="logo">
                    <h1>BOOKMATE</h1>
                  </div>
                  <div className="auth-buttons">
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                    <button className="signup-btn" onClick={handleSignupClick}>Signup</button>
                  </div>
                </div>
              </nav>

             
              <div className="main-content">
                <div className="main-image"></div>
                <div className="content-section">
                  <h1>Discover Your Next Must-Read with BookMate!</h1>
                  <p>
                    BookMate brings you personalized book recommendations based on your academic courses.<br />
                    Whether you're searching for textbooks, references, or exploring new reads, <br />
                    we’ve got you covered with curated suggestions tailored just for you.
                  </p>
                  <div className="blinking-text">Unlock knowledge and explore a world of books — your next essential read is just a search away!</div>
                </div>
              </div>

              
              <div className="values-container">
                <h2>Features</h2>
                <div className="value-card-wrapper">
                  <div className="value-card">
                    <h3>Course-Specific Resources</h3>
                    <p>Find textbooks and references tailored to specific academic courses.</p>
                  </div>
                  <div className="value-card">
                    <h3>Comprehensive Academic Search</h3>
                    <p>Search for books by course name from both KEC and OCLG collections.</p>
                  </div>
                  <div className="value-card">
                    <h3>Quick Book Access</h3>
                    <p>View book details and access online previews or download PDFs with one click.</p>
                  </div>
                  <div className="value-card">
                    <h3>Smart Keyword Matching</h3>
                    <p>Matches multiple keywords to find relevant books quickly.</p>
                  </div>
                  <div className="value-card">
                    <h3>Multi-Source Recommendations</h3>
                    <p>If a book isn’t found in KEC, get suggestions from OCLG automatically.</p>
                  </div>
                </div>
              </div>

              
              <div className="terms-section">
                <h3>Terms and Services</h3>
                <p>
                  By using BookMate, you agree to our terms and conditions. 
                  We ensure your data privacy and provide curated book recommendations, collected and verified by our team.
                </p>
              </div>

              
              {showLogin && <Login onClose={handleCloseLogin} />}
              {showSignup && <Signup onClose={handleCloseSignup} />}
            </div>
          }
        />

       
        <Route path="/book-recommendation" element={<BookRecommendation />} />
        <Route path="/crud-page" element={<BookCrudPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;*/

