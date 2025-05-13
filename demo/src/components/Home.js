// Home.js
import React from 'react';
import './Home.css'; // Create a CSS file for styling

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <h1>BookStore</h1>
          </div>
          <div className="auth-buttons">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Signup</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="main-image"></div>
        <div className="content-section">
          <h1>Welcome to BookFinder</h1>
          <p>
            BookFinder helps you discover new books based on your interests and preferences.<br />
            Find the perfect book recommendations based on your favorite authors, genres, and reading history.
          </p>
          <div className="blinking-text">Your next favorite book is just a search away!</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="values-container">
        <h2>Features</h2>
        <div className="value-card-wrapper">
          <div className="value-card">
            <h3>Personalized Recommendations</h3>
            <p>Receive book recommendations based on your favorite authors and genres.</p>
          </div>
          <div className="value-card">
            <h3>Extensive Book Library</h3>
            <p>Access a vast collection of books across multiple genres and categories.</p>
          </div>
          <div className="value-card">
            <h3>Book Reviews</h3>
            <p>Read reviews and ratings from other book lovers to find your next great read.</p>
          </div>
          <div className="value-card">
            <h3>Curated Lists</h3>
            <p>Discover curated book lists tailored to your interests and reading history.</p>
          </div>
          <div className="value-card">
            <h3>Author Insights</h3>
            <p>Learn more about your favorite authors and stay updated with their latest works.</p>
          </div>
        </div>
      </div>

      {/* Terms and Services */}
      <div className="terms-section">
        <h3>Terms and Services</h3>
        <p>
          By using BookFinder, you agree to our terms and services. We ensure the privacy of your
          data and offer personalized recommendations securely.
        </p>
      </div>
    </div>
  );
};

export default Home;
