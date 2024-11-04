import React, { useState } from 'react';

const AddBookForm = ({ target, onSuccess }) => {
  const [bookData, setBookData] = useState({
    courseName: '',
    textBook: '',
    author: '',
    edition: '',
    publisher: '',
    year: '',
    bookUrl: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collection = target === 'KEC' ? 'kecbook' : 'oclgbooks';
    try {
      await fetch(`/api/books/${collection}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      alert(`Book added to ${collection}!`);
      onSuccess();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for courseName, textBook, etc. */}
      <input name="courseName" placeholder="Course Name" onChange={handleChange} />
      <input name="textBook" placeholder="Text Book" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="edition" placeholder="Edition" onChange={handleChange} />
      <input name="publisher" placeholder="Publisher" onChange={handleChange} />
      <input name="year" placeholder="Year" onChange={handleChange} />
      <input name="bookUrl" placeholder="Book URL" onChange={handleChange} />
      <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
