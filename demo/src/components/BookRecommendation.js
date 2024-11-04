/*import React, { useState } from 'react';
import './BookRecommendation.css'; // Import the CSS for styling

const BookRecommendation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when search begins
    setError(null); // Reset error before new search

    try {
      const response = await fetch('http://localhost:5000/api/books/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch books'); // Include server message if available
      }

      setResults(data.result || []); // Ensure results is always an array

      // Set recommendations if no results were found
      if (data.result && data.result.length === 0) {
        setRecommendations(data.recommendations || []); // Set recommendations or empty array if undefined
      } else {
        setRecommendations([]); // Clear recommendations if books are found
      }

      // Show alert for any messages from the server
      if (data.message) {
        alert(data.message);
      }
    } catch (error) {
      setError('Error fetching books: ' + error.message);
    } finally {
      setLoading(false); // End loading once search is complete
    }
  };

  return (
    <div className="book-recommendation">
      <h2>Search Books by Course Name</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      <h2>Kongu Engineering College Books</h2>
      <div className="results">
        {results.length > 0 ? (
          results.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book['IMAGE URL']} alt={book['COURSE NAME']} className="book-image" />
              <div className="book-details">
                <h3>{book['COURSE NAME']}</h3>
                <p><strong>Textbook/Reference:</strong> {book['TEXT BOOK/REFERENCE']}</p>
                <p><strong>Author:</strong> {book['AUTHOR']}</p>
                <p><strong>Edition:</strong> {book['EDITION']}</p>
                <p><strong>Publisher:</strong> {book['PUBLISHER']}</p>
                <p><strong>Year:</strong> {book['YEAR']}</p>
                <a href={book['BOOK URL']} target="_blank" rel="noopener noreferrer">View Book</a>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No books found</p>
        ) : null}
      </div>

      <h2>Recommended Books</h2>
      <div className="recommendations">
        {recommendations.length > 0 ? (
          recommendations.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book['IMAGE URL']} alt={book['COURSE NAME']} className="book-image" />
              <div className="book-details">
                <h3>{book['COURSE NAME']}</h3>
                <p><strong>College:</strong> {book['COLLEGE']}</p>
                <p><strong>Textbook/Reference:</strong> {book['TEXT BOOK/REFERENCE']}</p>
                <p><strong>Author:</strong> {book['AUTHOR']}</p>
                <p><strong>Edition:</strong> {book['EDITION']}</p>
                <p><strong>Publisher:</strong> {book['PUBLISHER']}</p>
                <p><strong>Year:</strong> {book['YEAR']}</p>
                <a href={book['BOOK URL']} target="_blank" rel="noopener noreferrer">View Book</a>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No recommendations found</p>
        ) : null}
      </div>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default BookRecommendation;*/

import React, { useState } from 'react';
import './BookRecommendation.css'; // Import the CSS for styling

const BookRecommendation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [kecBooks, setKecBooks] = useState([]); // State for KEC books
  const [oclgBooks, setOclgBooks] = useState([]); // State for OCLG books
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when search begins
    setError(null); // Reset error before new search

    try {
      const response = await fetch('http://localhost:5000/api/books/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch books'); // Include server message if available
      }

      setKecBooks(data.kecBooks || []); // Set KEC books results
      setOclgBooks(data.oclgBooks || []); // Set OCLG books recommendations

      // Show alert for any messages from the server
      if (data.message) {
        alert(data.message);
      }
    } catch (error) {
      setError('Error fetching books: ' + error.message);
    } finally {
      setLoading(false); // End loading once search is complete
    }
  };

  return (
    <div className="book-recommendation">
      <h2>Search Books by Course Name</h2>

      {/* Search Form */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Display Search Results from KEC Books */}
      <h2>Kongu Engineering College Books</h2>
      <div className="results">
        {kecBooks.length > 0 ? (
          kecBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book['IMAGE URL']} alt={book['COURSE NAME']} className="book-image" />
              <div className="book-details">
                <h3>{book['COURSE NAME']}</h3>
                <p><strong>Textbook/Reference:</strong> {book['TEXT BOOK/REFERENCE']}</p>
                <p><strong>Author:</strong> {book['AUTHOR']}</p>
                <p><strong>Edition:</strong> {book['EDITION']}</p>
                <p><strong>Publisher:</strong> {book['PUBLISHER']}</p>
                <p><strong>Year:</strong> {book['YEAR']}</p>
                <a href={book['BOOK URL']} target="_blank" rel="noopener noreferrer">View Book</a>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No KEC books found</p>
        ) : null}
      </div>

      {/* Display Recommendations from OCLG Books */}
      <h2>Recommended Books from Other Colleges</h2>
      <div className="recommendations">
        {oclgBooks.length > 0 ? (
          oclgBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book['IMAGE URL']} alt={book['COURSE NAME']} className="book-image" />
              <div className="book-details">
                <h3>{book['COURSE NAME']}</h3>
                <p><strong>College:</strong> {book['COLLEGE']}</p>
                <p><strong>Textbook/Reference:</strong> {book['TEXT BOOK/REFERENCE']}</p>
                <p><strong>Author:</strong> {book['AUTHOR']}</p>
                <p><strong>Edition:</strong> {book['EDITION']}</p>
                <p><strong>Publisher:</strong> {book['PUBLISHER']}</p>
                <p><strong>Year:</strong> {book['YEAR']}</p>
                <a href={book['BOOK URL']} target="_blank" rel="noopener noreferrer">View Book</a>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No recommended books found</p>
        ) : null}
      </div>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default BookRecommendation;

