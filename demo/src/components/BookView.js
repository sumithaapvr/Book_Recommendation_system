import React, { useEffect, useState } from 'react';

const BookView = () => {
  const [kecBooks, setKecBooks] = useState([]);
  const [oclgBooks, setOclgBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const kecRes = await fetch('/api/books/kecbook');
      const oclgRes = await fetch('/api/books/oclgbooks');
      setKecBooks(await kecRes.json());
      setOclgBooks(await oclgRes.json());
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books in KEC</h2>
      <ul>{kecBooks.map(book => <li key={book._id}>{book.textBook}</li>)}</ul>

      <h2>Books in OCLG</h2>
      <ul>{oclgBooks.map(book => <li key={book._id}>{book.textBook}</li>)}</ul>
    </div>
  );
};

export default BookView;
